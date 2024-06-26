/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The flavors of the orderable service.
 */
export type ServiceFlavor = {
    /**
     * The flavor name
     */
    name: string;
    /**
     * The properties of the flavor
     */
    properties: Record<string, string>;
    /**
     * The priority of the flavor. The larger value means lower priority.
     */
    priority: number;
    /**
     * Important features and differentiators of the flavor.
     */
    features?: Array<string>;
};
