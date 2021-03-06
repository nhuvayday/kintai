(function() {
/**
 * @author ntd1712
 */
chaos.service("AuditModel", Anonymous);

function Anonymous(AbstractModel) {
    function AuditModel(data) {
        AuditModel.parent.constructor.apply(this, [data, AuditModel.getFields()]);
    }
    extend(AuditModel, AbstractModel);

    /**
     * @returns {String}
     */
    AuditModel.getRoute = function() {
        return "audit";
    };

    /**
     * @return {Object[]}
     */
    AuditModel.getFields = function() {
        return [{
            data: "Id",
            value: 0,
            visible: false
        },{
            data: "Name",
            title: "Name",
            value: "",
            class: "col-xs-2"
        },{
            data: "Action",
            title: "Action",
            value: "",
            class: "col-xs-2"
        },{
            data: "Information",
            title: "Information",
            value: "",
            class: "text-wrap",
            sortable: false
        },{
            data: "Type",
            value: "",
            visible: false
        },{
            data: "IpAddress",
            value: "",
            visible: false
        },{
            data: "Request",
            value: "",
            visible: false
        },{
            data: "Params",
            value: "",
            visible: false
        },{
            data: "Referrer",
            value: "",
            visible: false
        },{
            data: "CreatedAt",
            title: "Date",
            value: "",
            class: "col-xs-2",
            render: function(data) {
                return (data && data.date) || data;
            }
        }];
    };

    return AuditModel;
}

})();