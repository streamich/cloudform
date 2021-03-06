/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 2.0.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface PlacementGroupProperties {
    Strategy?: Value<string>
}

export default class PlacementGroup extends ResourceBase {


    constructor(properties?: PlacementGroupProperties) {
        super('AWS::EC2::PlacementGroup', properties)
    }
}
