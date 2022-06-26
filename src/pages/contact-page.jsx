// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import DocumentTitle from 'react-document-title';
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from '@formspree/react';

import PageContainerComponent from '../components/page-container-component';
import Alert from '../components/alert-component';

const FORM_API = 'mqkngrkj';
function ContactPage() {
  const [state, handleSubmit] = useForm(FORM_API);
  return (

    <DocumentTitle title="聯絡我們 - 動作健康 360">
      <PageContainerComponent title="聯絡我們">
        {state.succeeded && <Alert theme="accent">訊息已送出</Alert> }

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="_language" value="zh-TW" />
          <label htmlFor="name">
            姓名
            <input type="text" name="name" id="name" placeholder="請輸入您的姓名" required />
            <ValidationError
              prefix="name"
              field="姓名欄"
              errors={state.errors}
            />
          </label>
          <label htmlFor="email">
            電子信箱
            <input
              id="email"
              type="email"
              name="email"
              placeholder="請輸入您的電子信箱"
              required
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
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </label>
          <button type="submit" className="bg-primary border-primary rounded-sm py-3 px-15 fs-h5 fs-md-h4 text-white mt-3 w-100p" disabled={state.submitting}>
            送出
          </button>
        </form>
      </PageContainerComponent>
    </DocumentTitle>
  );
}

export default ContactPage;
