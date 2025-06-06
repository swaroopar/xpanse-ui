/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

import { Button, Popover } from 'antd';
import React from 'react';
import YAML from 'yaml';
import oclDisplayStyles from '../../../../styles/ocl-display.module.css';
import { Deployment } from '../../../../xpanse-api/generated';

export function DeploymentScriptText({ deployment }: { deployment: Deployment }): React.JSX.Element {
    if (deployment.terraformDeployment) {
        const yamlDocument = new YAML.Document();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        yamlDocument.contents =
            deployment.terraformDeployment.scriptFiles ?? deployment.terraformDeployment.scriptsRepo;
        return (
            <Popover
                content={<pre className={oclDisplayStyles.oclDeploymentScript}>{yamlDocument.toString()}</pre>}
                title={'Deployment Scripts'}
                trigger='hover'
            >
                <Button className={oclDisplayStyles.oclDataHover} type={'link'}>
                    {'scripts'}
                </Button>
            </Popover>
        );
    }
    return <></>;
}
