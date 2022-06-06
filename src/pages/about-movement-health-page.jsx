import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';
import PageContainerComponent from '../components/page-container-component';
import MediaLinkComponent from '../components/media-link-component';
import Btn from '../components/button-component';

function AboutMovementHealthPage() {
  return (
    <DocumentTitle title="學動作 - 動作健康 360">
      <PageContainerComponent title="學動作 - 什麼是動作科學？">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="fw-normal mb-10 mb-md-20 text-primary-dark">
              <ul className="mb-4">
                <li>
                  不要翹二郎腿，小心骨盆會歪斜？
                </li>
                <li>
                  不要圓背彎腰做硬舉、撿東西，不然容易閃到腰？
                </li>
              </ul>

              <p className="mb-6">
                如果今天告訴你，上述的事情都可以做，你會不會有點震驚！？
              </p>

              <p className="mb-6">
                這就是動作健康 (movement health) 的核心理念。
                <br />
                ──
                <span className="fw-bold">你應該且本來就要可以「想怎麼動、就怎麼動」。</span>
              </p>

              <p className="mb-4">
                動作健康的意思是每個人的身體除了擺脫疼痛，更重要的是能夠自由地「選擇」想要怎麼動。
              </p>

              <p className="mb-4">
                人體是精密，但是非常聰明的機器。要想遠離慢性疼痛、運動肢體協調，重點不是如何做出「正確」或是「最好」的動作。
              </p>
              <p className="mb-4">
                而是你的
                <span className="fw-bold">身體擁有面對各種情境時，能做出最相對應動作的「選擇權 (movement choice)」。</span>
              </p>
              <div className="border-secondary border-around rounded-sm p-4 mb-4">
                <h3 className="letter-space-sm-paragraph fs-h5 fw-bold mb-4">
                  想要擁有豐富的「選擇權 (movement choice)
                  」需具備
                </h3>
                <ul>
                  <li className="list-style-disc">
                    好的「自我身體認知 (body awareness)」
                  </li>
                  <li className="list-style-disc">
                    好的「身體動作控制能力 (motor control)」
                  </li>
                </ul>
              </div>
              <p className="mb-4">
                夠豐富的「選擇權 (movement choice)
                」，可以讓你遠離疼痛、降低傷害、促進動作表現、增加生活品質，達到「動作健康」。
              </p>

              <p className="mb-4">所以，下次做全身檢查時，除了檢查心臟、血壓、膽固醇之外，不妨檢查看看自己的「動作」夠不夠健康吧。</p>

              <p>
                追蹤我們的 IG, FB，會一步步帶大家認識，何謂動作選擇、動作控制以及喪失動作健康怎麼辦。
              </p>

              <p>記住「要活就要動，要動就要動得健康」</p>
            </div>
          </div>
        </div>

        <div className="row gx-0 mb-10">
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-lg-4 mb-lg-0 bg-primary rounded-top rounded-lg-start p-4 h-md-100p">
              <h3 className="fs-h5 fs-lg-h4 text-secondary letter-space-sm-paragraph fw-normal ">
                追蹤我們
                <br />
                了解動作掌握健康！
              </h3>
            </div>
          </div>
          <div className="col-lg-8 px-4 py-lg-2 border-primary border-except-top border-lg-except-start rounded-bottom rounded-lg-end">
            <MediaLinkComponent theme="primary" showId isFlexColumn isSmall />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="p-5 border-accent border-around rounded mb-20">
              <h3 className="text-accent mb-4 text-center letter-space-md fw-normal">需要更完整的服務？</h3>
              <ul>
                <li className="mb-4">
                  <Link to="/service/category">
                    <Btn theme="accent">來體驗</Btn>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <Btn theme="primary" isOutline>聯絡我們</Btn>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="fs-h5 fw-bold mb-2 letter-space-normal-paragraph text-gray-dark">參考資料</h2>
            <ol className="fw-normal text-gray-dark">
              <li className="letter-space-sm-paragraph mb-4 fs-small">
                McNeill W, Blandford L. Movement health. J Bodyw Mov Ther.
                <br />
                2015;19(1):150-9
              </li>
              <li className=" letter-space-sm-paragraph fs-small">
                Dingenen B, Blandford L, Comerford M, Staes F, Mottram S. The assessment of movement health in clinical practice: A multidimensional perspective. Phys Ther Sport.
                <br />
                2018;32:282-92.

              </li>
            </ol>
          </div>

        </div>

      </PageContainerComponent>
    </DocumentTitle>
  );
}

export default AboutMovementHealthPage;
