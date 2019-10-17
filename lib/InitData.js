const USER_TABLE_DATA = [
    {
        userId: "001",
        username: "马云",
        level: "员工"
    },
    {
        userId: "002",
        username: "马化腾",
        level: "员工"
    },
    {
        userId: "003",
        username: "李彦宏",
        level: "员工"
    },
    {
        userId: "004",
        username: "刘强东",
        level: "员工"
    },
    {
        userId: "005",
        username: "胡歌",
        level: "经理"
    },
    {
        userId: "006",
        username: "赵丽颖",
        level: "经理"
    },
    {
        userId: "007",
        username: "吴京",
        level: "经理"
    },
    {
        userId: "008",
        username: "习大大",
        level: "老板"
    },
    {
        userId: "009",
        username: "地大大",
        level: "老板"
    }
];

//工作流模板的json数据
const deployProcessModelJson = "{\n" +
    "    \"documentation\": \"费用报销流程\",\n" +
    "    \"name\": \"费用报销申请流程\",\n" +
    "    \"processDefinitionKey\": \"ExpenseId\",\n" +
    "    \"events\": [\n" +
    "        {\n" +
    "            \"id\": \"startId\",\n" +
    "            \"name\": \"开始\",\n" +
    "            \"type\": 0\n" +
    "        },\n" +
    "        {\n" +
    "            \"id\": \"endId\",\n" +
    "            \"name\": \"结束\",\n" +
    "            \"type\": 1\n" +
    "        }\n" +
    "    ],\n" +
    "    \"gateways\": [\n" +
    "        {\n" +
    "            \"id\": \"distributeTaskGatewayId\",\n" +
    "            \"name\": \"分发任务\",\n" +
    "            \"type\": 1\n" +
    "        },\n" +
    "        {\n" +
    "            \"id\": \"collectTaskGatewayId\",\n" +
    "            \"name\": \"汇总任务\",\n" +
    "            \"type\": 1\n" +
    "        }\n" +
    "    ],\n" +
    "    \"sequenceFlows\": [\n" +
    "        {\n" +
    "            \"sourceRef\": \"startId\",\n" +
    "            \"targetRef\": \"employeeTaskId\"\n" +
    "        },\n" +
    "        {\n" +
    "            \"sourceRef\": \"employeeTaskId\",\n" +
    "            \"targetRef\": \"distributeTaskGatewayId\"\n" +
    "        },\n" +
    "        {\n" +
    "            \"sourceRef\": \"distributeTaskGatewayId\",\n" +
    "            \"targetRef\": \"directorTaskId01\"\n" +
    "        },\n" +
    "        {\n" +
    "            \"sourceRef\": \"distributeTaskGatewayId\",\n" +
    "            \"targetRef\": \"directorTaskId02\"\n" +
    "        },\n" +
    "        {\n" +
    "            \"sourceRef\": \"directorTaskId01\",\n" +
    "            \"targetRef\": \"collectTaskGatewayId\"\n" +
    "        },\n" +
    "        {\n" +
    "            \"sourceRef\": \"directorTaskId02\",\n" +
    "            \"targetRef\": \"collectTaskGatewayId\"\n" +
    "        },\n" +
    "        {\n" +
    "            \"sourceRef\": \"collectTaskGatewayId\",\n" +
    "            \"targetRef\": \"bossTaskId\"\n" +
    "        },\n" +
    "        {\n" +
    "            \"sourceRef\": \"bossTaskId\",\n" +
    "            \"targetRef\": \"endId\"\n" +
    "        }\n" +
    "    ],\n" +
    "    \"userTasks\": [\n" +
    "        {\n" +
    "            \"documentation\": \"${documentation}\",\n" +
    "            \"id\": \"employeeTaskId\",\n" +
    "            \"taskName\": \"单据提交确认\",\n" +
    "            \"userId\": \"${employeeId}\"\n" +
    "        },\n" +
    "        {\n" +
    "            \"documentation\": \"${documentation}\",\n" +
    "            \"id\": \"directorTaskId01\",\n" +
    "            \"taskName\": \"经理审批\",\n" +
    "            \"userId\": \"${director1Id}\"\n" +
    "        },\n" +
    "        {\n" +
    "            \"documentation\": \"${documentation}\",\n" +
    "            \"id\": \"directorTaskId02\",\n" +
    "            \"taskName\": \"经理审批\",\n" +
    "            \"userId\": \"${director2Id}\"\n" +
    "        },\n" +
    "        {\n" +
    "            \"documentation\": \"${documentation}\",\n" +
    "            \"id\": \"bossTaskId\",\n" +
    "            \"taskName\": \"老板审批\",\n" +
    "            \"userId\": \"${bossId}\"\n" +
    "        }\n" +
    "    ]\n" +
    "}";