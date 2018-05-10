// for node-connector only => need to check if node is runtime if browser-connector is needed
const Thrift = require("../build/thrift/node/mapd_types.js")

export const convertObjectToThriftCopyParams = obj => new Thrift.TCopyParams(obj) // eslint-disable-line no-undef

export const mutateThriftRowDesc = (rowDescArray, thriftRowDescArray) => {
  rowDescArray.forEach((obj, i) => {
    thriftRowDescArray[i].col_name = obj.col_name   // clean_col_name would probably be a built name from  "is_reserved_keyword": false, "src_name": "", "is_system": false, "is_physical": null
    thriftRowDescArray[i].col_type.encoding = obj.col_type.encoding
    thriftRowDescArray[i].col_type.type = obj.col_type.type
  })
  return thriftRowDescArray
}
