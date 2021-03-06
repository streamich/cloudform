/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 2.0.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface ReceiptRuleSetProperties {
    RuleSetName?: Value<string>
}

export default class ReceiptRuleSet extends ResourceBase {


    constructor(properties?: ReceiptRuleSetProperties) {
        super('AWS::SES::ReceiptRuleSet', properties)
    }
}
