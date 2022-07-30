import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';
import PageContainerComponent from '../components/page-container-component';
import MediaLinkComponent from '../components/media-link-component';
import Btn from '../components/button-component';

function AboutMovementHealthPage() {
  return (
    <DocumentTitle title="動作健康 - 動作健康 360">
      <PageContainerComponent title="什麼是動作健康與動作科學？">

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

              <p className="mb-4">而幫助你達到動作健康的那門科學、就叫做「動作科學(Movement Science)」。</p>

              <p className="mb-4">
                醫學幫助你從疾病中恢復、重回生活；
                <br />
                運動科學幫助你挑戰身體極限、突破自我。
                <br />
                而動作科學作為研究人體動作的學問，
              </p>

              <p className="mb-4">
                以解剖學、肌動學、神經肌骨系統為根基，融合醫學與運動科學，
                <br />
                目的教會你如何好好地動，重新找回身體自主權。
                <br />
                肌肉、骨頭與大腦之間相互協調，產生出「動作。」
              </p>

              <p className="mb-4">
                「動作(movement)」本身就是一個系統，
                <br />
                動作科學便是那解決系統障礙的處方。
              </p>

              <p className="mb-4">「動作的問題，就用動作的方法解決」</p>

              <p className="mb-4">結合醫學與運動——動作科學，發現動作的問題，解決動作的問題，重新擁有「動作健康」。</p>

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
          <div className="col-lg-8">
            <div className="px-4 py-lg-2 border-primary border-except-top border-lg-except-start rounded-bottom rounded-lg-end">
              <MediaLinkComponent theme="primary" showId isFlexColumn isSmall />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="p-5 border-accent border-around rounded mb-20">
              <h3 className="text-accent mb-4 text-center letter-space-md fw-normal">需要更完整的服務？</h3>
              <ul>
                <li className="mb-4">
                  <Link to="/service">
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
      </PageContainerComponent>
    </DocumentTitle>
  );
}

export default AboutMovementHealthPage;
