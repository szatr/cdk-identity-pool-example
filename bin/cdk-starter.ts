#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import {CdkStarterStack} from '../lib/cdk-starter-stack';

const app = new cdk.App();
new CdkStarterStack(app, 'cdk-starter-stack', {
  stackName: 'cdk-starter-stack',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
