/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

import { env } from '../../config/config';
import { OidcConfiguration } from '@axa-fr/react-oidc';
import { defaultRole, grantedRolesKey, usernameKey } from './OidcUserInfo';
import nextConfig from '../../../next.config.mjs';

export const allowRoleList: string[] = ['isv', 'user', 'admin', 'csp'];

export const OidcConfig: OidcConfiguration = {
    authority: nextConfig.publicRuntimeConfig?.authUrl as string,
    client_id: nextConfig.publicRuntimeConfig?.clientId as string,
    redirect_uri: window.location.origin + (nextConfig.publicRuntimeConfig?.redirectUri as string),
    silent_redirect_uri: window.location.origin + (nextConfig.publicRuntimeConfig?.redirectUri as string),
    scope: nextConfig.publicRuntimeConfig?.scopes as string,
    service_worker_relative_url: '/OidcServiceWorker.js',
    service_worker_only: env.NEXT_PUBLIC_AUTH_USE_SERVICE_WORKER_ONLY === 'true',
    service_worker_activate: () => env.NEXT_PUBLIC_AUTH_USE_SERVICE_WORKER_ONLY === 'true',
};

export function getRolesOfUser(oidcUserInfo: object): string[] {
    let availableRoleList: string[] = [];
    if (grantedRolesKey in oidcUserInfo) {
        const grantedRolesObject = oidcUserInfo[grantedRolesKey];
        if (typeof grantedRolesObject === 'object' && grantedRolesObject !== null) {
            const roleList: string[] = Object.keys(grantedRolesObject);
            availableRoleList = roleList.filter((element) => {
                return allowRoleList.includes(element);
            });
        }
    }

    if (availableRoleList.length === 0) {
        availableRoleList.push(defaultRole); // default role when no roles are assigned.
    }
    return availableRoleList;
}

export function getUserName(oidcUserInfo: object): string {
    if (usernameKey in oidcUserInfo) {
        if (typeof oidcUserInfo.name === 'string') {
            return oidcUserInfo.name;
        }
    }
    return '';
}
