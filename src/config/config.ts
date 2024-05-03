/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

import nextConfig from '../../next.config.mjs';

const injectedEnv = window.injectedEnv ? (window.injectedEnv as Record<string, never>) : {};

/**
 * the env object contains a combination of configuration loaded from .env and values injected via environment variables
 * for production builds running via docker images. The values from environment vars get priority.
 */
const env: Record<string, string | undefined> = {
    ...nextConfig.publicRuntimeConfig,
    ...injectedEnv,
};
// eslint-disable-next-line no-console
console.log(process.env);
export { env };
