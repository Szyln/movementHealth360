import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';
import PageContainerComponent from '../components/page-container-component';
import Btn from '../components/button-component';

const pageNotFoundImg = '/404-Error-Page-not-Found-with-people-connecting-a-plug-bro.svg';

function ForbiddenPage() {
  return (
    <DocumentTitle title="找不到頁面 - 動作健康 360">
      <PageContainerComponent title="找不到本頁面">
        <div className="row">
          <div className="offset-3 col-5">
            <img src={pageNotFoundImg} alt="404 Error Page not Found with people connecting a plug" />
            <Link to="/">
              <Btn>回首頁</Btn>
            </Link>
          </div>
        </div>
      </PageContainerComponent>
    </DocumentTitle>
  );
}

export default ForbiddenPage;
