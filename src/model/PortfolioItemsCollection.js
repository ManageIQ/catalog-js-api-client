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
import CollectionLinks from './CollectionLinks';
import CollectionMetadata from './CollectionMetadata';
import PortfolioItem from './PortfolioItem';

/**
 * The PortfolioItemsCollection model module.
 * @module model/PortfolioItemsCollection
 * @version 0.1.0
 */
class PortfolioItemsCollection {
    /**
     * Constructs a new <code>PortfolioItemsCollection</code>.
     * @alias module:model/PortfolioItemsCollection
     */
    constructor() { 
        
        PortfolioItemsCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PortfolioItemsCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioItemsCollection} obj Optional instance to populate.
     * @return {module:model/PortfolioItemsCollection} The populated <code>PortfolioItemsCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioItemsCollection();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = CollectionMetadata.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = CollectionLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PortfolioItem]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CollectionMetadata} meta
 */
PortfolioItemsCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/CollectionLinks} links
 */
PortfolioItemsCollection.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/PortfolioItem>} data
 */
PortfolioItemsCollection.prototype['data'] = undefined;






export default PortfolioItemsCollection;

