/**
 * Catalog API
 * This API gets and orders catalog items from different cloud sources.
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
 * The UnsharePolicy model module.
 * @module model/UnsharePolicy
 * @version 0.1.0
 */
class UnsharePolicy {
    /**
     * Constructs a new <code>UnsharePolicy</code>.
     * @alias module:model/UnsharePolicy
     * @param permissions {Array.<String>} The permissions to remove for this resource.
     */
    constructor(permissions) { 
        
        UnsharePolicy.initialize(this, permissions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, permissions) { 
        obj['permissions'] = permissions;
    }

    /**
     * Constructs a <code>UnsharePolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnsharePolicy} obj Optional instance to populate.
     * @return {module:model/UnsharePolicy} The populated <code>UnsharePolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnsharePolicy();

            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
            if (data.hasOwnProperty('group_uuids')) {
                obj['group_uuids'] = ApiClient.convertToType(data['group_uuids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The permissions to remove for this resource.
 * @member {Array.<String>} permissions
 */
UnsharePolicy.prototype['permissions'] = undefined;

/**
 * An array of group UUID's retrieved from the RBAC Service from which the permissions have to be removed. If group uuids are not specified we will unshare it from all groups.
 * @member {Array.<String>} group_uuids
 */
UnsharePolicy.prototype['group_uuids'] = undefined;






export default UnsharePolicy;

