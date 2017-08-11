/**
 * Created by I067382 on 8/8/2017.
 */
'use strict';

const testjson = {
    "id": "creDelDSConnOnHadoopTestConnection",
    "connection": {
        "type": "DS_SOAP",
        "description": "creDelDSConnOnHadoopTestDes",
        "connection": "$connectionURL",
        "protocol": "HTTP",
        "rfcDestination": [{"k1": "v1"}, {"k1": "v1"}],
        "region": null,
        "configurationType": "MANUAL",
        "authentication": {
            "type": "BASIC",
            "user": "$connectionUser",
            "password": "$connectionPassword"
        },
        "system": "creDelDSConnOnHadoopTestSystem",
        "cmsSystem": "$cmsSystem"
    }
};

const flatten = (data) => {
    var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            for(var i=0, l=cur.length; i<l; i++)
                recurse(cur[i], prop + "[" + i + "]");
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
};

// console.log(flatten(testjson));
console.log(Object(testjson.connection));
console.log(testjson.connection)
