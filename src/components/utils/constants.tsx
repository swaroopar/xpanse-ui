/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

export const homePageRoute: string = '/home';
export const registerPageRoute: string = '/register';
export const footerText: string = `©${new Date().getFullYear().toString()} Eclipse Foundation - Xpanse`;
export const catalogPageRoute: string = '/catalog';
export const catalogSubPageRoute: string = '/catalog#';
export const catalogLabelName: string = 'Catalog';
export const servicesPageRoute: string = '/services';
export const myServicesRoute: string = '/myServices';
export const myServicesLabelName: string = 'MyServices';
export const servicesSubPageRoute: string = '/services#';
export const servicesLabelName: string = 'Services';
export const createServicePageRoute: string = servicesPageRoute + '/createService';
export const orderPageRoute: string = createServicePageRoute + '/orderSubmit';
export const monitorPageRoute: string = '/monitor';
export const monitorLabelName: string = 'Monitor';

export const credentialPageRoute: string = '/credentials';
export const credentialLabelName: string = 'Credentials';

export const healthCheckPageRoute: string = '/healthCheck';
export const healthCheckLabelName: string = 'HealthCheck';
export const monitorMetricQueueSize: number = 50;
export const fetchOnlyLastKnownMonitorMetricDataTimeInterval: number = 5 * 1000;
export const fetchMonitorMetricDataTimeInterval: number = 60 * 1000;
export const deploymentStatusPollingInterval: number = 5000;
export const CUSTOMER_SERVICE_NAME_FIELD: string = 'Name';
export const registerFailedRoute: string = '/register/failed';
export const registerInvalidRoute: string = '/register/invalid';
export const registerSuccessfulRoute: string = '/register/successful';
export const policiesRoute: string = '/userPolicies';
export const policiesLabelName: string = 'Policies';
export const reportsRoute: string = '/reports';
export const reportsLabelName: string = 'Reports';

export const serviceNameKeyQuery: string = 'serviceName';
export const serviceCspQuery: string = 'csp';
export const serviceVersionKeyQuery: string = 'version';
export const serviceHostingTypeQuery: string = 'hostingType';
export const serviceVendorQuery: string = 'serviceVendor';
export const serviceCategoryQuery: string = 'category';

export const workflowsPageRoute: string = '/workflows';
export const workflowsLabelName: string = 'Workflows';
export const serviceReviewsPageRoute: string = '/reviewService';
export const serviceReviewsLabelName: string = 'Review Service';
export const registeredServicesPageRoute: string = '/registeredServices';
export const registeredServicesLabelName: string = 'Registered Services';

export const serviceUserPoliciesErrorText: string = 'Fetching Service UserPolicies Details Failed.';
export const userPoliciesManagementErrorText: string = 'Fetching UserPolicies Management Service Details Failed.';
export const serviceAvailableErrorText: string = 'Fetching Available Services Failed.';
export const credentialsErrorText: string = 'Fetching Credentials Failed.';
export const workflowTasksErrorText: string = 'Fetching Tasks Failed.';
export const serviceDetailsErrorText: string = 'Fetching Service Details Failed.';
export const serviceTemplatesErrorText: string = 'Fetching Service Templates Failed.';
export const healthCheckStatusErrorText: string = 'Fetching Health Check Status Failed.';
export const deleteServiceTemplateErrorText: string = 'Delete Request Failed';
export const republishServiceTemplateErrorText: string = 'Republish Request Failed';
export const unpublishServiceTemplateErrorText: string = 'Unpublish Request Failed';
export const cancelServiceTemplateReviewErrorText: string = 'Cancellation failed';

export const numberOfRetries: number = 2; // this will retry 3 times. Count starts from 0.

export const dummyTestUser = 'test user';

export type roles = 'isv' | 'user' | 'admin' | 'csp';
