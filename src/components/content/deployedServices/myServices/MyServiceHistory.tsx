/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

import { CheckCircleOutlined, MinusCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Table, Tag, Tooltip, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import serviceModifyStyles from '../../../../styles/service-modify.module.css';
import {
    DeployRequest,
    DeployedServiceDetails,
    ServiceOrderDetails,
    VendorHostedDeployedServiceDetails,
    taskStatus,
} from '../../../../xpanse-api/generated';
import useListServiceModifyHistoryQuery from './query/useListServiceModifyHistoryQuery';

const { Text } = Typography;

export const MyServiceHistory = ({
    deployedService,
}: {
    deployedService: DeployedServiceDetails | VendorHostedDeployedServiceDetails;
}): React.JSX.Element => {
    let serviceModificationAuditHistoryList: ServiceOrderDetails[] = [];
    const listServiceModifyHistoryQuery = useListServiceModifyHistoryQuery(deployedService.serviceId);

    if (listServiceModifyHistoryQuery.isSuccess && listServiceModifyHistoryQuery.data.length > 0) {
        serviceModificationAuditHistoryList = listServiceModifyHistoryQuery.data;
    }

    const columns: ColumnsType<ServiceOrderDetails> = [
        {
            title: 'ModifyId',
            dataIndex: 'orderId',
            align: 'center',
            width: 100,
            className: serviceModifyStyles.modifyHistoryValue,
        },
        {
            title: 'Previous',
            dataIndex: 'previousDeployRequest',
            width: 300,
            className: serviceModifyStyles.modifyHistoryValue,
            align: 'center',
            render: (value: DeployRequest) => {
                return (
                    <ul className={serviceModifyStyles.modifyHistoryValueLi}>
                        <li>
                            <Text strong>Customer Service Name:</Text>&nbsp;{value.customerServiceName}
                        </li>
                        {value.serviceRequestProperties ? (
                            <li>
                                <Text strong>Service Request Properties:</Text>&nbsp;
                                {JSON.stringify(value.serviceRequestProperties)}
                            </li>
                        ) : (
                            <></>
                        )}
                    </ul>
                );
            },
        },
        {
            title: 'New',
            dataIndex: 'newDeployRequest',
            className: serviceModifyStyles.modifyHistoryValue,
            align: 'center',
            width: 300,
            render: (value: DeployRequest) => {
                return (
                    <ul className={serviceModifyStyles.modifyHistoryValueLi}>
                        <li>
                            <Text strong>Customer Service Name:</Text>&nbsp;{value.customerServiceName}
                        </li>
                        {value.serviceRequestProperties ? (
                            <li>
                                <Text strong>Service Request Properties:</Text>&nbsp;
                                {JSON.stringify(value.serviceRequestProperties)}
                            </li>
                        ) : (
                            <></>
                        )}
                    </ul>
                );
            },
        },
        {
            title: 'StartedTime',
            dataIndex: 'startedTime',
            align: 'center',
            width: 150,
        },
        {
            title: 'CompletedTime',
            dataIndex: 'completedTime',
            align: 'center',
            width: 150,
        },
        {
            title: 'Status',
            dataIndex: 'taskStatus',
            align: 'center',
            width: 50,
            render: (value) => {
                if (value === taskStatus.FAILED) {
                    return (
                        <Tag icon={<QuestionCircleOutlined />} color={'error'}>
                            {value}
                        </Tag>
                    );
                } else if (value === taskStatus.SUCCESSFUL) {
                    return (
                        <Tag icon={<CheckCircleOutlined />} color={'success'}>
                            {value}
                        </Tag>
                    );
                } else {
                    return (
                        <Tag icon={<MinusCircleOutlined />} color={'default'}>
                            {value}
                        </Tag>
                    );
                }
            },
        },
        {
            title: 'Failure Reason',
            dataIndex: 'errorMsg',
            align: 'center',
            width: 150,
            render: (value: string | undefined) => {
                if (value) {
                    return (
                        <Tooltip title={value}>
                            <span className={serviceModifyStyles.modifyHistoryErrorMsgValue}>{value}</span>
                        </Tooltip>
                    );
                }
            },
        },
    ];

    return (
        <div className={serviceModifyStyles.modifyContainer}>
            <Table
                columns={columns}
                dataSource={serviceModificationAuditHistoryList}
                loading={listServiceModifyHistoryQuery.isPending || listServiceModifyHistoryQuery.isRefetching}
                rowKey={'id'}
                scroll={{ x: 'max-content' }}
            />
        </div>
    );
};
