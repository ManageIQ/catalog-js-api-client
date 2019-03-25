/**
 * Catalog API
 * This is a API to fetch and order catalog items from different cloud sources
 *
 * OpenAPI spec version: 0.1.0
 * Contact: support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreatePortfolioItem model module.
 * @module model/CreatePortfolioItem
 * @version 0.1.0
 */
class CreatePortfolioItem {
    /**
     * Constructs a new <code>CreatePortfolioItem</code>.
     * @alias module:model/CreatePortfolioItem
     */
    constructor() { 
        
        CreatePortfolioItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatePortfolioItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePortfolioItem} obj Optional instance to populate.
     * @return {module:model/CreatePortfolioItem} The populated <code>CreatePortfolioItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePortfolioItem();

            if (data.hasOwnProperty('service_offering_ref')) {
                obj['service_offering_ref'] = ApiClient.convertToType(data['service_offering_ref'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The service offering ref should be retrieved from a call to the Topology Service
 * @member {String} service_offering_ref
 */
CreatePortfolioItem.prototype['service_offering_ref'] = undefined;






export default CreatePortfolioItem;

