import React from 'react';
import { DocumentTitle } from 'react-document-title';
import PageContainerComponent from '../components/page-container-component';

function AboutMovementHealthPage() {
  return (

    <PageContainerComponent title="學動作 - 什麼是動作科學？">
      <div className="fw-normal mb-20 text-primary-dark">
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
          <br />
          這就是動作健康 (movement health) 的核心理念。
          <br />
        </p>
        <p className="fw-normal fs-h4 p-6 mb-6 rounded border-accent border-around  text-accent">你應該且本來就要可以「想怎麼動、就怎麼動」。</p>

        <p>動作健康的意思是每個人的身體除了擺脫疼痛，更重要的是能夠自由地「選擇」想要怎麼動。</p>

        <p className="mb-4">
          人體是精密，但是非常聰明的機器。
          <br />
          要想遠離慢性疼痛、運動肢體協調，重點不是如何做出「正確」或是「最好」的動作。
          <br />
          而是你的身體擁有面對各種情境時，能做出最相對應動作的「選擇權(movement choice)」。
        </p>

        <p className="mb-4">
          好的「自我身體認知 (body awareness)」，與好的「身體動作控制能力 (motor control)」， 使你擁有最豐富的「選擇權 (movement choice)」。
          <br />
          讓你遠離疼痛、降低傷害、促進動作表現、增加生活品質，達到「動作健康」。
        </p>

        <p className="mb-4">所以，下次做全身檢查時，除了檢查心臟、血壓、膽固醇之外，不妨檢查看看自己的「動作」夠不夠健康吧。</p>

        <p>追蹤我們的 IG, FB，會一步步帶大家認識，何謂動作選擇、動作控制以及喪失動作健康怎麼辦。</p>

        <p>記住「要活就要動，要動就要動得健康」</p>
      </div>
      <div>
        <h2 className="fs-h5 fw-bold mb-2 letter-space-normal-paragraph text-primary-dark">參考資料</h2>
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

    </PageContainerComponent>

  );
}

export default AboutMovementHealthPage;
