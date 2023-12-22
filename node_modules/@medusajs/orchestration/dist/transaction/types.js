"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionState = exports.TransactionStepStatus = exports.TransactionHandlerType = void 0;
var TransactionHandlerType;
(function (TransactionHandlerType) {
    TransactionHandlerType["INVOKE"] = "invoke";
    TransactionHandlerType["COMPENSATE"] = "compensate";
})(TransactionHandlerType || (exports.TransactionHandlerType = TransactionHandlerType = {}));
var TransactionStepStatus;
(function (TransactionStepStatus) {
    TransactionStepStatus["IDLE"] = "idle";
    TransactionStepStatus["OK"] = "ok";
    TransactionStepStatus["WAITING"] = "waiting_response";
    TransactionStepStatus["TEMPORARY_FAILURE"] = "temp_failure";
    TransactionStepStatus["PERMANENT_FAILURE"] = "permanent_failure";
})(TransactionStepStatus || (exports.TransactionStepStatus = TransactionStepStatus = {}));
var TransactionState;
(function (TransactionState) {
    TransactionState["NOT_STARTED"] = "not_started";
    TransactionState["INVOKING"] = "invoking";
    TransactionState["WAITING_TO_COMPENSATE"] = "waiting_to_compensate";
    TransactionState["COMPENSATING"] = "compensating";
    TransactionState["DONE"] = "done";
    TransactionState["REVERTED"] = "reverted";
    TransactionState["FAILED"] = "failed";
    TransactionState["DORMANT"] = "dormant";
    TransactionState["SKIPPED"] = "skipped";
})(TransactionState || (exports.TransactionState = TransactionState = {}));
//# sourceMappingURL=types.js.map