import expres from "express";
import dataCollection from "../models/datamodels.js";

const dataSetterRoute = new expres.Router()

// api for login process
dataSetterRoute.post("/Auth/v1/setData", async (request, response) => {
    console.log("api is fired");
    try {
        let id = request.body.id
        let tour_id = request.body.tour_id
        let tour_name = request.body.tour_name
        let tour_length_days = request.body.tour_length_days
        let operator_id = request.body.operator_id
        let operator_name = request.body.operator_name
        let departure_date = request.body.departure_date
        let return_date = request.body.return_date
        let created_at = request.body.created_at
        let type = request.body.type
        let hold_expire_at = request.body.hold_expire_at
        let status = request.body.status
        let total_value = request.body.total_value
        let pax = request.body.pax
        let main_passenger_name = request.body.main_passenger_name
        let confirmed_at = request.body.confirmed_at
        let last_message = request.body.last_message
        let partner_info_id = request.body.partner_info_id
        let agent_id = request.body.agent_id
        let store_id = request.body.store_id
        let contract_type = request.body.contract_type
        let calculation_base = request.body.calculation_base
        let commission_rate = request.body.commission_rate
        let commission_value = request.body.commission_value
        let commission_status = request.body.commission_status
        let booking_fee_rate = request.body.booking_fee_rate
        let booking_fee_value = request.body.booking_fee_value
        let booking_fee_status = request.body.booking_fee_status
        let link_type = request.body.link_type
        let url = request.body.url
        let status_reason = request.body.status_reason
        let status_reason_text = request.body.status_reason_text
        let status_reason_context = request.body.status_reason_context

        let variableArray = [
             id, tour_id, tour_name, tour_length_days, operator_id
            , operator_name
            , departure_date
            , return_date
            , created_at
            , type
            , hold_expire_at
            , status
            , total_value
            , pax
            , main_passenger_name
            , confirmed_at
            , last_message
            , partner_info_id
            , agent_id
            , store_id
            , contract_type
            , calculation_base
            , commission_rate
            , commission_value
            , commission_status
            , booking_fee_rate
            , booking_fee_value
            , booking_fee_status
            , link_type
            , url
            , status_reason
            , status_reason_text
            , status_reason_context
        ]

        let variableJson = {
           0: "id"
            ,1: "tour_id"
            ,2: "tour_name"
            ,3: "tour_length_days"
            ,4: "operator_id"
            ,5: "operator_name"
            ,6: "departure_date"
            ,7: "return_date"
            ,8: "created_at"
            ,9: "type"
            ,10: "hold_expire_at"
            ,11: "status"
            ,12: "total_value"
            ,13: "pax"
            ,14: "main_passenger_name"
            ,15: "confirmed_at"
            ,16: "last_message"
            ,17: "partner_info_id"
            ,18: "agent_id"
            ,19: "store_id"
            ,20: "contract_type"
            ,21: "calculation_base"
            ,22: "commission_rate"
            ,23: "commission_value"
            ,24: "commission_status"
            ,25: "booking_fee_rate"
            ,26: "booking_fee_value"
            ,27: "booking_fee_status"
            ,28: "link_type"
            ,29: "url"
            ,30: "status_reason"
            ,31: "status_reason_text"
            ,32: "status_reason_context"
        }

        let errorFlag = 0
        for (const i in variableArray) {
            if (variableArray[i] === undefined) {
                console.log("i == ", i, " ", variableJson[i]);
                response.status(402).send({
                    error: `please give ${variableJson[i]}`
                })
                errorFlag = 1
                return
            }
            if(errorFlag === 1) {
                return
            }
        }

        if(errorFlag === 1) {
            return
        }

        const mainDataItemsArray = [
            {
                id,
                tour: {
                    "tour_id": tour_id,
                    "tour_name": tour_name,
                    "tour_length_days": tour_length_days,
                    "operator": {
                        "id": operator_id,
                        "name": operator_name
                    }
                },
                "departure_date": departure_date,
                "return_date": return_date,
                "created_at": created_at,
                "type": type,
                "hold_expire_at": hold_expire_at,
                "status": status,
                "total_value": total_value,
                "pax": pax,
                "main_passenger": {
                    "name": main_passenger_name
                },
                "confirmed_at": confirmed_at,
                "last_message": last_message,
                "partner_info": {
                    "id": partner_info_id,
                    "agent_id": agent_id,
                    "store_id": store_id,
                    "contract_type": contract_type,
                    "calculation_base": calculation_base,
                    "commission_rate": commission_rate,
                    "commission_value": commission_value,
                    "commission_status": commission_status,
                    "booking_fee_rate": booking_fee_rate,
                    "booking_fee_value": booking_fee_value,
                    "booking_fee_status": booking_fee_status
                },
                "links": [
                    {
                        "type": link_type,
                        "url": url
                    }
                ],
                "status_reason": status_reason,
                "status_reason_text": status_reason_text,
                "status_reason_context": status_reason_context
            }
        ]

        const mainResponseDataJson = {
            "current_page": 0,
            "items": mainDataItemsArray,
            "next_page": 0
        }

        let prepareDataObj = new dataCollection(mainResponseDataJson)
        const savedData = await prepareDataObj.save()

        console.log("your data === ", savedData);

        response.status(400).send({
            status: "success",
            data: savedData
        })

    } catch (error) {
        response.status(400).send({
            status: "failed",
            error: error
        })
    }
})

export default dataSetterRoute