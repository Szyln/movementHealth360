import React from 'react';
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from '@formspree/react';

import DocumentTitle from 'react-document-title';
import PageContainerComponent from '../components/page-container-component';

function ContactPage() {
  const [state, handleSubmit] = useForm('mqkngrkj');

  return (
    <DocumentTitle title="聯絡我們 - 動作健康 360">
      <PageContainerComponent title="聯絡我們">
        {state.succeeded && <p className="text-accent border-around border-accent rounded-sm p-4 fs-h4 border-lg mb-7">訊息已送出！</p>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            姓名
            <input type="text" name="name" id="name" placeholder="請輸入您的姓名" />
          </label>
          <label htmlFor="email">
            電子信箱
            <input
              id="email"
              type="email"
              name="email"
              placeholder="請輸入您的電子信箱"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>
          <label htmlFor="message">
            內容
            <textarea
              id="message"
              name="message"
              placeholder="有什麼想了解的呢？"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </label>
          <button type="submit" className="bg-primary border-primary rounded-sm py-3 px-15 fs-h4 text-white mt-3" disabled={state.submitting}>
            送出
          </button>
        </form>
      </PageContainerComponent>
    </DocumentTitle>
  );
}

export default ContactPage;
