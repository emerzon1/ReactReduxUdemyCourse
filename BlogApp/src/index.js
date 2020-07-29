import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./components/ApprovalCard";
import BlogPost from "./components/BlogPost";
import faker from "faker";
const App = () => {
    return (
        <div>
            <br />
            <div className="ui container comments">
                <ApprovalCard>
                    <BlogPost
                        author="Sam"
                        date="Today at 6:00PM"
                        text="My blog Post"
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <BlogPost
                        author="Sam"
                        date="Today at 6:00PM"
                        text="My blog Post"
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <BlogPost
                        author="Sam"
                        date="Today at 6:00PM"
                        text="My blog Post"
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
            </div>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));
