import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./chatbotWidget.css";

/**
 * ChatbotWidget - Placeholder for future AI chatbot integration
 *
 * Future implementation should:
 * 1. Connect to an AI API (OpenAI, Anthropic, etc.)
 * 2. Provide context about the portfolio (from user.js data)
 * 3. Answer questions about experience, projects, and skills
 *
 * To enable: set CHATBOT_ENABLED to true
 */
const CHATBOT_ENABLED = false;

const ChatbotWidget = () => {
	const [isOpen, setIsOpen] = useState(false);

	if (!CHATBOT_ENABLED) {
		return null;
	}

	return (
		<div className="chatbot-widget">
			{isOpen && (
				<div className="chatbot-dialog">
					<div className="chatbot-header">
						<span>Portfolio Assistant</span>
						<button
							className="chatbot-close"
							onClick={() => setIsOpen(false)}
							aria-label="Close chat"
						>
							<FontAwesomeIcon icon={faTimes} />
						</button>
					</div>
					<div className="chatbot-messages">
						<div className="chatbot-message assistant">
							Hi! I'm an AI assistant that can answer questions about
							Tommy's experience, projects, and skills. How can I help you?
						</div>
					</div>
					<div className="chatbot-input-container">
						<input
							type="text"
							className="chatbot-input"
							placeholder="Ask me anything..."
							disabled
						/>
						<button className="chatbot-send" disabled>
							Send
						</button>
					</div>
				</div>
			)}

			<button
				className="chatbot-toggle"
				onClick={() => setIsOpen(!isOpen)}
				aria-label={isOpen ? "Close chat" : "Open chat"}
			>
				<FontAwesomeIcon icon={isOpen ? faTimes : faComment} />
			</button>
		</div>
	);
};

export default ChatbotWidget;
