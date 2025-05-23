/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import catalogStyles from '../../../styles/catalog.module.css';
import deploymentVariablesStyles from '../../../styles/deployment-variables.module.css';
import { AnsibleScriptConfig, ObjectManage, ServiceChangeScript, ServiceObject } from '../../../xpanse-api/generated';
import { getServiceConfigurationToolIcon } from '../serviceConfigurationManage/getServiceConfigurationToolIcon.ts';

interface ServiceObjectChangeScript {
    type: string;
    changeHandler: string;
    runOnlyOnce: boolean;
    ansibleScriptConfig: AnsibleScriptConfig;
}

const getServiceObjectScript = (serviceObjectManage: ObjectManage, serviceObject: ServiceObject) => {
    const serviceChangeScripts: ServiceObjectChangeScript[] = [];
    serviceChangeScripts.push({
        type: serviceObject.handlerType,
        changeHandler: serviceObjectManage.objectHandlerScript.changeHandler,
        runOnlyOnce: serviceObjectManage.objectHandlerScript.runOnlyOnce,
        ansibleScriptConfig: serviceObjectManage.objectHandlerScript.ansibleScriptConfig,
    });

    return serviceChangeScripts;
};

function ServiceObjectScripts({
    serviceObjectManage,
    serviceObject,
}: {
    serviceObjectManage: ObjectManage;
    serviceObject: ServiceObject;
}): React.JSX.Element {
    const columns: ColumnsType<ServiceChangeScript> = [
        {
            title: <div className={deploymentVariablesStyles.variablesColumns}>Type</div>,
            dataIndex: 'type',
            render: (text: string) => {
                return (
                    <img
                        src={getServiceConfigurationToolIcon(text)}
                        alt={text}
                        className={deploymentVariablesStyles.ansibleKindContent}
                    />
                );
            },
        },
        {
            title: <div className={deploymentVariablesStyles.variablesColumns}>ChangeHandler</div>,
            dataIndex: 'changeHandler',
            render: (text: string) => {
                return <div className={deploymentVariablesStyles.variablesColumns}>{text}</div>;
            },
        },
        {
            title: <div className={deploymentVariablesStyles.variablesColumns}>RunOnlyOnce</div>,
            dataIndex: 'runOnlyOnce',
            render: (text: boolean | undefined | null) => {
                if (text === true) {
                    return <div className={deploymentVariablesStyles.variablesColumns}>{`true`}</div>;
                } else if (text === false) {
                    return <div className={deploymentVariablesStyles.variablesColumns}>{`false`}</div>;
                } else {
                    return null;
                }
            },
        },
        {
            title: <div className={deploymentVariablesStyles.variablesColumns}>AnsibleScriptConfig</div>,
            dataIndex: 'ansibleScriptConfig',
            children: [
                {
                    title: <div className={deploymentVariablesStyles.variablesTableChildrenTitle}>Playbook Name</div>,
                    dataIndex: ['ansibleScriptConfig', 'playbookName'],
                    key: 'playbookName',
                    render: (text: string) => {
                        return <div className={deploymentVariablesStyles.variablesColumns}>{text}</div>;
                    },
                },
                {
                    title: <div className={deploymentVariablesStyles.variablesTableChildrenTitle}>Virtual Env</div>,
                    dataIndex: ['ansibleScriptConfig', 'virtualEnv'],
                    key: 'virtualEnv',
                    render: (text: string) => {
                        return <div className={deploymentVariablesStyles.variablesColumns}>{text}</div>;
                    },
                },
                {
                    title: <div className={deploymentVariablesStyles.variablesTableChildrenTitle}>Python Version</div>,
                    dataIndex: ['ansibleScriptConfig', 'pythonVersion'],
                    key: 'pythonVersion',
                    render: (text: string) => {
                        return <div className={deploymentVariablesStyles.variablesColumns}>{text}</div>;
                    },
                },
                {
                    title: (
                        <div className={deploymentVariablesStyles.variablesTableChildrenTitle}>
                            Is Prepare Ansible Environment
                        </div>
                    ),
                    dataIndex: ['ansibleScriptConfig', 'isPrepareAnsibleEnvironment'],
                    key: 'isPrepareAnsibleEnvironment',
                    render: (text: boolean | undefined | null) => {
                        if (text === true) {
                            return <div className={deploymentVariablesStyles.variablesColumns}>{`true`}</div>;
                        } else if (text === false) {
                            return <div className={deploymentVariablesStyles.variablesColumns}>{`false`}</div>;
                        } else {
                            return null;
                        }
                    },
                },
                {
                    title: <div className={deploymentVariablesStyles.variablesTableChildrenTitle}>RepoUrl</div>,
                    dataIndex: ['ansibleScriptConfig', 'repoUrl'],
                    key: 'repoUrl',
                    render: (text: string) => {
                        return <div className={deploymentVariablesStyles.variablesColumns}>{text}</div>;
                    },
                },
                {
                    title: <div className={deploymentVariablesStyles.variablesTableChildrenTitle}>Branch</div>,
                    dataIndex: ['ansibleScriptConfig', 'branch'],
                    key: 'branch',
                    render: (text: string) => {
                        return <div className={deploymentVariablesStyles.variablesColumns}>{text}</div>;
                    },
                },
                {
                    title: (
                        <div className={deploymentVariablesStyles.variablesTableChildrenTitle}>RequirementsFile</div>
                    ),
                    dataIndex: ['ansibleScriptConfig', 'requirementsFile'],
                    key: 'requirementsFile',
                    render: (text: string) => {
                        return <div className={deploymentVariablesStyles.variablesColumns}>{text}</div>;
                    },
                },
                {
                    title: <div className={deploymentVariablesStyles.variablesTableChildrenTitle}>GalaxyFile</div>,
                    dataIndex: ['ansibleScriptConfig', 'galaxyFile'],
                    key: 'galaxyFile',
                    render: (text: string) => {
                        return <div className={deploymentVariablesStyles.variablesColumns}>{text}</div>;
                    },
                },
                {
                    title: (
                        <div className={deploymentVariablesStyles.variablesTableChildrenTitle}>
                            AnsibleInventoryRequired
                        </div>
                    ),
                    dataIndex: ['ansibleScriptConfig', 'ansibleInventoryRequired'],
                    key: 'ansibleInventoryRequired',
                    render: (text: boolean | undefined | null) => {
                        if (text === true) {
                            return <div className={deploymentVariablesStyles.variablesColumns}>{`true`}</div>;
                        } else if (text === false) {
                            return <div className={deploymentVariablesStyles.variablesColumns}>{`false`}</div>;
                        } else {
                            return null;
                        }
                    },
                },
            ],
        },
    ];

    return (
        <>
            <div className={`${catalogStyles.catalogDetailsH6} ${catalogStyles.managementVariable}`}>
                &nbsp;Service Object Scripts
            </div>
            <div className={deploymentVariablesStyles.variablesTableContainer}>
                <Table
                    bordered
                    columns={columns}
                    dataSource={getServiceObjectScript(serviceObjectManage, serviceObject)}
                    rowKey={'name'}
                    pagination={false}
                />
            </div>
        </>
    );
}

export default ServiceObjectScripts;
