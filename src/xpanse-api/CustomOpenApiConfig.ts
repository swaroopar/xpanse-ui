/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

import { OpenAPI } from './generated';
import { useOidcAccessToken } from '@axa-fr/react-oidc';
import { env } from '../config/config';
import nextConfig from '../../next.config.mjs';

export const updateApiConfig = (): void => {
    OpenAPI.BASE = nextConfig.publicRuntimeConfig?.xpanseApiUrl ?? '';
    // when service worker enabled, the access token is automatically injected by the oidc-react library.
    OpenAPI.TOKEN =
        env.NEXT_PUBLIC_AUTH_USE_SERVICE_WORKER_ONLY !== 'true' ? useOidcAccessToken().accessToken : undefined;
};
