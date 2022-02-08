import React, { Component } from "react";

import Bounce from "react-reveal/Bounce";

import LightSpeed from "react-reveal/LightSpeed";
import Products from "../Products";

import data from "../../data.json";
import test from "../test.json"
import CryptoPrice from "../Crypto/CryptoPrice";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      // products: data.products,
      products: test.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div id="home">
        <Bounce left>
          <section>
            <hr />
            <CryptoPrice />
            <p>
              <div id="boxstyle">
                <LightSpeed right>
                  <div className="grid-container">
                    <main>
                      <div className="content">
                        <div className="main">
                          <Products
                            products={this.state.products}
                            addToCart={this.addToCart}
                          ></Products>
                        </div>
                        <div className="sidebar">
                        </div>
                      </div>
                    </main>
                    <footer>All right is reserved</footer>
                  </div>
                </LightSpeed>
              </div>
              <hr />
              <hr />
              <br />
              <h1>About the Projects</h1>
              <br />
              <strong>In progress!</strong>
              <br/>
              asperiores sapiente facilis ipsa quaerat totam deserunt dolore
              recusandae voluptas odit mollitia aperiam provident iusto,
              deleniti nihil accusantium quod? Nulla, temporibus dolorum.
              Ducimus quibusdam vitae hic. Architecto enim vero cupiditate
              blanditiis aperiam ratione ducimus ullam. Repudiandae asperiores
              doloribus fugiat, nulla exercitationem ab quidem dolor tenetur
              cupiditate praesentium labore voluptatem voluptas enim, et, qui
              impedit necessitatibus ea debitis ducimus a dicta autem reiciendis
              facere eum! Suscipit, fugiat tempora quia esse facilis ipsam
              laudantium dicta! Animi nobis velit quibusdam excepturi, odit illo
              quae nam maxime consectetur aliquid aut, eius nihil quas
              cupiditate exercitationem delectus officiis cum minima iste rem
              quasi expedita quia neque iure? Deleniti possimus cupiditate
              doloremque ea! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Accusamus doloribus dignissimos aliquid, quos libero,
              molestiae cumque recusandae nihil, cum illo eius nulla. Velit
              illum repudiandae, totam commodi numquam veniam itaque soluta
              asperiores in, qui suscipit molestiae fugit similique natus
              recusandae odit quia tempora eos unde ad explicabo. Possimus
              ratione quas sit itaque sunt aperiam odio, tempora ipsam. Fugit
              laborum fuga nam aut tempore earum adipisci nihil consequatur
              quaerat, vero labore maiores asperiores officiis optio commodi
              mollitia temporibus laboriosam rerum dignissimos perferendis!
              Exercitationem maiores rerum reprehenderit. Fugit nisi, velit
              officia tenetur est ratione excepturi odit facere hic omnis. Omnis
              itaque perspiciatis magni iusto architecto voluptatem corrupti.
              Architecto impedit quibusdam iste libero nostrum doloremque unde,
              error praesentium consequatur rerum saepe dolore exercitationem
              reprehenderit quisquam aperiam molestias, recusandae nemo eius
              pariatur corrupti tempore? Esse culpa odit dignissimos aliquid
              accusantium quasi iusto vitae placeat alias, ipsam quod eum velit
              obcaecati possimus sapiente cupiditate impedit deserunt! Expedita
              laborum, qui doloremque debitis fuga impedit necessitatibus nobis
              atque cum neque fugit culpa esse sunt obcaecati recusandae,
              dolorum illum cumque! Quas eligendi sit fuga minima. Illo,
              voluptas perferendis rem est animi saepe, unde nesciunt adipisci
              corrupti dolorum beatae rerum ducimus sunt nam facere asperiores
              nostrum, quo in sapiente magni maxime? Illo quos non aspernatur a
              voluptatem harum laboriosam beatae delectus assumenda explicabo,
              molestias tenetur ex iste ea ad commodi quas eos consectetur alias
              voluptas officiis omnis quasi. Totam impedit eligendi eos
              assumenda esse minima asperiores numquam, ipsam perferendis dicta
              maiores quidem, exercitationem architecto officiis reprehenderit
              dolor. Unde corrupti, magnam quidem ipsa dolor hic totam doloribus
              maxime enim voluptates doloremque ab iusto placeat eos rerum
              repellat? Rem nisi quas cum et laudantium unde, laboriosam ipsa
              recusandae eius sunt nesciunt minima, fugiat, odit veritatis
              perspiciatis incidunt! Libero, culpa ab eius excepturi optio illum
              fuga voluptates aperiam repudiandae ratione. Animi nobis sunt
              dolore, quisquam minus debitis ut, sapiente alias incidunt esse
              commodi. Aliquam, cupiditate quos at voluptatem consequuntur, esse
              dicta nam laboriosam nemo nihil velit autem quaerat nisi
              blanditiis magnam natus, fugit aperiam quas iusto architecto
              consequatur veniam. Deleniti velit id natus saepe voluptate neque
              voluptates doloribus ipsam corrupti incidunt distinctio excepturi
              tempore quidem accusamus amet placeat consequatur porro enim
              officia laborum optio quasi quibusdam, labore commodi? Sint animi
              quam praesentium molestias odio ducimus. Animi ducimus harum
              asperiores laboriosam quos dolore libero odit quam eum quae. Iure
              reprehenderit magnam non sequi, rerum, culpa, exercitationem illo
              eligendi ea iste consequuntur voluptates voluptatem a quia saepe
              alias quaerat dolores obcaecati quasi harum repudiandae explicabo.
              Sunt excepturi atque, aut nobis accusamus dolores minima
              provident. Tenetur at magnam odit, quas quibusdam, quaerat
              officiis molestias nulla aperiam laboriosam natus perferendis
              dicta, rerum dignissimos tempore vel eum nesciunt maiores
              voluptates sunt. Ad harum velit reprehenderit blanditiis quibusdam
              quia a ab ea magni cumque consequuntur corrupti molestiae,
              cupiditate in beatae facere, vitae rerum! Illo est dicta porro
              impedit modi. A aliquam enim repellat iusto, animi fuga eius
              tempore quidem quo omnis at distinctio aperiam dolor iste, neque
              veritatis mollitia earum velit possimus odio laborum voluptatem
              culpa exercitationem. Dolorem.
            </p>
          </section>
        </Bounce>
      </div>
    );
  }
}

export default Home;
