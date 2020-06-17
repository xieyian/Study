 import React from 'react';
 import ReactDOM from 'react-dom';
 import faker from 'faker';
 import CommentDetail from './CommentDetail';
 import ApprovalCard from './ApprovalCard'

 const App = () => {
     return (
         <div className="ui container comments"> 
        <ApprovalCard>
            <h1>Error</h1>
            Are you sure you want to do this?
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
            name="Andy" 
            timeAgo="Today at 4PM" 
            content="hello world" 
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
            name="Alex" 
            timeAgo="Today at 11PM" 
            content="ni hao "
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
            name="James" 
            timeAgo="Today at 8PM" 
            content="find job"
            avatar={faker.image.avatar()} 
            />
        </ApprovalCard>
        </div>

        
     );
 };

 ReactDOM.render(<App />, document.querySelector('#root'));
 
