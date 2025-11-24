const router = require("express").Router();
const c = require("../controllers/conversationController");

router.get("/:id", c.getConversations);

module.exports = router;