import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as lambda from 'aws-cdk-lib/aws-lambda'

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const helloWorldLambda = new lambda.Function(this, 'helloWorldLambda', {
      functionName: 'helloWorld',
      code: lambda.Code.fromAsset('lambda'),
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'helloWorld.handler',
    })
    const helloWorldLambdaUrl = helloWorldLambda.addFunctionUrl({ authType: lambda.FunctionUrlAuthType.NONE })
    new cdk.CfnOutput(this, 'helloWorldLambdaUrl', {
      value: helloWorldLambdaUrl.url,
    })
  }
}
