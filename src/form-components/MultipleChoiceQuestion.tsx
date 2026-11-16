import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [userSelection, setUserSelection] = useState<string>(options[0]);

    function updateUserSelection(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserSelection(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="multipleChoiceAnswer">
                    <Form.Label>Choose your answer:</Form.Label>
                    <Form.Select
                        value={userSelection}
                        onChange={updateUserSelection}
                    >
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {userSelection === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
