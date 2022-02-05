import React, { Component } from "react";

import Bounce from "react-reveal/Bounce";

import LightSpeed from "react-reveal/LightSpeed";
import Products from "../Products";

// import data from "../../data.json";
import data from "../../data.json";
import CryptoPrice from "../Crypto/CryptoPrice";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      size: "",
      sort: "",
    };
  }

  // createOrder = (order) => {
  //   alert("Need to save order for " + order.name);
  // };
  // removeFromCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   this.setState({
  //     cartItems: cartItems.filter((x) => x._id !== product._id),
  //   });
  //   localStorage.setItem(
  //     "cartItems",
  //     JSON.stringify(cartItems.filter((x) => x._id !== product._id))
  //   );
  // };
  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach((item) => {
  //     if (item._id === product._id) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cartItems.push({ ...product, count: 1 });
  //   }
  //   this.setState({ cartItems });
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };
  // sortProducts = (event) => {
  //   // impl
  //   const sort = event.target.value;
  //   console.log(event.target.value);
  //   this.setState((state) => ({
  //     sort: sort,
  //     products: this.state.products
  //       .slice()
  //       .sort((a, b) =>
  //         sort === "lowest"
  //           ? a.price > b.price
  //             ? 1
  //             : -1
  //           : sort === "highest"
  //           ? a.price < b.price
  //             ? 1
  //             : -1
  //           : a._id < b._id
  //           ? 1
  //           : -1
  //       ),
  //   }));
  // };
  // filterProducts = (event) => {
  //   // impl
  //   console.log(event.target.value);
  //   if (event.target.value === "") {
  //     this.setState({ size: event.target.value, products: data.products });
  //   } else {
  //     this.setState({
  //       size: event.target.value,
  //       products: data.products.filter(
  //         (product) => product.availableSizes.indexOf(event.target.value) >= 0
  //       ),
  //     });
  //   }
  // };

  render() {
    return (
      <div id="home">
        <Bounce left>
          <section>
            <p>
              Welcome to my Portfolio
            </p>
            {/* <br /> */}
            {/* <h2>Projects</h2> */}
            <hr />
            {/* Crypto component */}
            <p>
              {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              nobis numquam odio, ea porro sint blanditiis nisi vitae alias
              dolores itaque eligendi? Exercitationem minima saepe optio facere
              quod officiis porro delectus ad eaque! Animi eum neque id
              reprehenderit quam modi, laudantium error beatae sunt esse
              laboriosam quaerat praesentium maiores dignissimos iusto eos
              voluptate corporis quas doloremque repellendus fuga exercitationem
              nam quasi. Rerum sed blanditiis dolorem accusamus rem? Distinctio
              error labore optio placeat pariatur consequuntur quam ipsum
              reprehenderit nostrum deserunt! Nesciunt, quis fugiat! Minima,
              iusto sapiente velit voluptas blanditiis, ad recusandae obcaecati
              repudiandae delectus unde excepturi laudantium, alias libero modi
              esse odio voluptatem? Distinctio, iure consectetur, tempore itaque
              expedita eligendi deleniti quasi quae, enim quas quis molestias
              perspiciatis officiis unde ad esse impedit? Laboriosam corrupti,
              culpa qui iure nam nostrum corporis veniam rem dolores eveniet
              quos dolorem! Nemo fugit accusamus minima. Voluptas eum,
              obcaecati, cum aliquid enim quis ducimus saepe eligendi distinctio
              accusantium debitis sapiente dolor! Ipsam nobis dolore dolorum
              officia fuga suscipit aperiam tempora molestiae aliquam maiores
              possimus doloribus alias quae aspernatur odit dignissimos ullam
              voluptatum, nemo praesentium molestias nam ducimus aliquid harum.
              Nostrum repudiandae quaerat libero nam explicabo. Aperiam ipsam
              incidunt soluta voluptate harum autem beatae commodi alias
              veritatis maxime recusandae corporis quod perspiciatis est fugit
              architecto nam, officiis ipsum nulla libero excepturi omnis, amet
              numquam qui? Consequuntur cum velit cupiditate, repellendus
              voluptatibus laborum illo minima, tempora, similique numquam
              aspernatur voluptates saepe fugit dolores impedit modi non qui!
              Architecto quo velit perferendis quasi possimus iure incidunt?
              Quod maiores exercitationem suscipit repellat deserunt, a
              molestiae quasi tempore voluptatibus pariatur minima fuga facilis
              mollitia est distinctio reprehenderit in dolorem doloribus
              tempora? Ratione rem vitae natus inventore molestiae commodi
              explicabo nesciunt obcaecati magnam! Porro ea deserunt assumenda
              doloribus? Dolorum vel dolores veritatis quos commodi iusto dolor
              architecto nisi consequuntur, suscipit possimus eius quidem magnam
              necessitatibus voluptatibus, fugiat, rerum consequatur blanditiis
              eveniet exercitationem. Eveniet quod numquam vel consectetur nobis
              unde quibusdam vero fuga voluptates nam accusamus cum eos
              similique alias incidunt consequuntur beatae exercitationem, a,
              placeat eaque saepe? Eum exercitationem consequuntur ut porro
              commodi inventore iste quos dolores doloribus, omnis et, aliquam
              ducimus nobis. Reprehenderit quisquam alias illum, explicabo eius
              illo sapiente quaerat perspiciatis iusto commodi tenetur vero
              expedita obcaecati quibusdam, suscipit ducimus eveniet delectus
              veritatis necessitatibus similique dolores quo optio nulla. Error
              perspiciatis velit quibusdam id. Similique obcaecati iusto fugit
              labore magni magnam consequatur cumque temporibus dolore nostrum
              asperiores dignissimos eos aliquid quae sed beatae porro
              consequuntur ea nemo, sequi nam repudiandae reprehenderit quasi
              totam. Veritatis nesciunt eius, sunt at voluptatem incidunt eos
              necessitatibus sed sit voluptas iure pariatur dolor doloremque
              voluptatibus? Exercitationem accusamus aut unde deleniti
              perferendis animi laborum ea et tempora, adipisci nostrum nisi
              delectus quo aperiam illo ad dolor obcaecati facere autem maxime
              suscipit ut ratione. Error beatae, odio quas soluta at excepturi
              debitis explicabo corrupti id itaque repellat tempore deleniti
              laboriosam eius molestiae? Odio, ipsam! Natus consectetur culpa
              quae ex placeat cupiditate neque. Corporis tenetur nobis ea qui
              natus consectetur facere iusto minima quaerat sapiente. Porro,
              excepturi saepe? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Dolor, facilis architecto ad similique magni
              voluptatem nisi esse, officia non atque nostrum quam blanditiis
              unde temporibus, expedita laborum minus asperiores vero culpa?
              Aperiam fuga ratione eveniet adipisci laborum eius illo, numquam
              consectetur aliquid, nostrum harum. Id esse iste laboriosam,
              inventore repellat rerum facilis perferendis beatae placeat
              aperiam tempora! Possimus, eligendi eius quas debitis ullam
              officia. Odio error velit eius doloribus molestias placeat
              asperiores illo voluptatibus, labore perspiciatis suscipit magnam
              facere, adipisci nulla sapiente distinctio aliquam. Sit
              voluptatem, veniam sunt iure eos excepturi quod quos incidunt,
              eligendi ea placeat sapiente id eum, officiis fugit corporis
              distinctio quam tenetur! Deserunt facere quas perferendis
              accusantium excepturi assumenda architecto, asperiores odio?
              Dolorum qui, dolor accusantium nemo tempora nam, maxime expedita
              sequi odio atque quis natus. Excepturi ipsam vero, hic rem ullam
              atque repellat assumenda veritatis ab aliquam libero perspiciatis
              enim quaerat laudantium odit aperiam autem! Explicabo, iusto
              quaerat quas pariatur veritatis necessitatibus dicta qui
              accusantium cum. Sit, tempora sed suscipit ullam accusantium
              temporibus laudantium repellat reprehenderit rerum voluptate, illo
              iste laboriosam similique modi, veritatis voluptatibus sint
              necessitatibus. Ea ad autem amet, dolore unde minima. Impedit
              pariatur, quidem consequatur earum natus magni nisi sit, expedita
              fuga officiis delectus eius? Soluta accusamus ex repudiandae,
              aliquam, accusantium cumque quas quae maiores vel corporis quos
              totam itaque ipsam placeat est maxime fuga facilis delectus?
              Reiciendis incidunt sequi quisquam? Quidem corporis, eveniet
              incidunt, debitis dicta aut molestiae accusamus tempore, quos at
              culpa eius expedita fugiat. Commodi libero placeat veritatis
              aliquam fugiat nostrum, itaque magnam? Placeat harum sapiente odio
              voluptatem impedit culpa minus error sit, molestias omnis
              distinctio laborum ut eaque debitis dolorem. Quaerat voluptate
              obcaecati atque odio, delectus fugit eum sunt optio alias
              veritatis iusto error perspiciatis, reprehenderit explicabo. Vel
              dignissimos, odit dolores ab animi eligendi sequi consequuntur at
              exercitationem molestiae rerum odio ipsum fugit eius libero unde
              illo omnis recusandae corrupti voluptate voluptates velit beatae.
              Nisi atque fugit minima natus aliquid officiis magnam ex
              praesentium tempora optio eius saepe, repellendus odio, vel cumque
              esse, mollitia iure quae cum adipisci veritatis quaerat nostrum
              incidunt qui! Officia tempora minus vel non! Nesciunt laborum
              iste, unde, possimus non ea nulla porro repudiandae maxime saepe
              voluptatum quibusdam veniam dolorem ullam odit corporis sapiente
              blanditiis aliquam quas omnis? Fuga, ipsa quisquam! Maiores,
              cupiditate impedit veniam doloremque eveniet minima vel. Modi,
              delectus sint esse sit labore ratione aut */}
              {/* <hr /> */}
              <div id="boxstyle">
                <LightSpeed right>
                  <div className="grid-container">
                    {/* <header>
                      <a href="/">React</a>
                    </header> */}
                    <main>
                      <div className="content">
                        <div className="main">
                          {/* <Filter
                            count={this.state.products.length}
                            size={this.state.size}
                            sort={this.state.sort}
                            filterProducts={this.filterProducts}
                            sortProducts={this.sortProducts}
                          ></Filter> */}
                          {/* <CryptoPrice/> */}
                          <Products
                            products={this.state.products}
                            addToCart={this.addToCart}
                          ></Products>
                        </div>
                        <div className="sidebar">
                          {/* <Cart
                            cartItems={this.state.cartItems}
                            removeFromCart={this.removeFromCart}
                            createOrder={this.createOrder}
                          /> */}
                        </div>
                      </div>
                    </main>
                    <footer>All right is reserved</footer>
                  </div>
                </LightSpeed>
              </div>
              <hr />
              <hr />
              <br/>
              <h1>About the Projects</h1>
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
