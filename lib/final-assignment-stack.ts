import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';

export class FinalAssignmentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    /* Lambda Function */
    const lambdaFunction = new lambda.Function(this, "FinalAssignement", {
      runtime: lambda.Runtime.NODEJS_20_X,
      functionName: "final-assignment",
      handler: "index.handler",
      code: lambda.Code.fromAsset(path.join(__dirname,"..","lambda","dist","finalAssignment.zip")),
    })

    const apiGateway = new apigateway.LambdaRestApi(this, "AuthApi", {
      handler: lambdaFunction,
      proxy: false,
      deployOptions:{
        stageName: "v1"
      }
    });

    const apiGatewayResource = apiGateway.root.addResource("auth");

    apiGatewayResource.addMethod("POST");

    // example resource
    // const queue = new sqs.Queue(this, 'FinalAssignmentQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
