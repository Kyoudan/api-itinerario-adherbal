import prismaClient from "../database/prismaClient";
import { hashSync } from "bcrypt";
import { config } from "dotenv";
config();

async function seedAdm() {
  try {
    const adm = {
      name: `${process.env.SEED_USER}`,
      email: `${process.env.SEED_EMAIL}`,
      password: hashSync(process.env.SEED_PASSWORD as string, 8),
    };

    await prismaClient.admins.create({
      data: adm,
    });
    console.log("Criado 2");
  } catch (err: any) {
    if (err.meta.target && err.meta.target[0] == "email") {
      return console.log("Email já cadastrado 2");
    }
    if (err.meta.target && err.meta.target[0] == "id") {
      return console.log("Id já cadastrado 2");
    }
    console.log(err);
    console.log("Erro ao cadastrar adm");
  }
}

async function seedPostTags() {
  try {
    const types = [
      { name: "Saúde" },
      { name: "Tecnologia" },
      { name: "Arte" },
      { name: "Política" },
      { name: "Economia" },
      { name: "Cultura" },
      { name: "Historia" },
    ];

    await prismaClient.postTags.createMany({
      data: types,
    });

    console.log("Tags criadas");
  } catch (err: any) {
    console.log(err);
    console.log("Erro ao crias as tags");
  }
}

async function seedPosts() {
  try {
    const posts = [
      {
        name: "Perigo do covid 19 para nosso planeta",
        description: "Esse texto vai falar sobre a covid-19",
        adminId: 1,
        postTagsId: 1,
        author: "dev",
        slug: "perigo-do-covid-19-para-nosso-planeta",
        isFixed: true,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_VZCpcxqzWfLk2rmsHYfii5XOiNbv5mR0y77Ju9AqKl6nIVMa12_ILuCqGnEgqWZv7A&usqp=CAU",
      },
      {
        name: "Uma teoria sobre os dinossauros, eles são reais?",
        description: "Esse texto vai falar sobre os dinossauros",
        adminId: 1,
        postTagsId: 7,
        author: "dev",
        slug: "uma-teoria-sobre-os-dinossauros-eles-são-reais?",
        isFixed: true,
        image:
          "https://s3.static.brasilescola.uol.com.br/be/2022/06/dinossauros.jpg",
      },
      {
        name: "Historia do brasil é importante",
        description: "Esse texto vai falar sobre o brasil",
        adminId: 1,
        postTagsId: 6,
        author: "dev",
        slug: "historia-do-brasil-é-importante",
        image:
          "https://s3.static.brasilescola.uol.com.br/be/2021/11/bandeira-do-brasil.jpg",
      },
      {
        name: "As inteligencias artificias e a humanidade",
        description: "Esse texto vai falar sobre as i.a",
        adminId: 1,
        postTagsId: 6,
        author: "dev",
        slug: "as-inteligencias-artificias-e-a-humanidade",
        image:
          "https://img.olhardigital.com.br/wp-content/uploads/2023/01/evil-hacker-ai.webp",
      },
    ];

    await prismaClient.posts.createMany({
      data: posts,
    });

    console.log("Conteudo das postagens criada criadas");
  } catch (err: any) {
    console.log(err);
    console.log("Erro ao criar o conteudo das postagens");
  }
}
async function seedPostsContent() {
  try {
    const postsContent = [
      {
        content:
          "O vírus é transmitido principalmente por meio de gotículas respiratórias quando uma pessoa infectada tosse, espirra, fala ou respira. Também pode ser transmitido ao tocar em superfícies contaminadas e, em seguida, tocar no rosto, especialmente nos olhos, nariz ou boca. A doença pode variar de leve a grave, com sintomas que incluem febre, tosse, falta de ar, fadiga, dores musculares, dor de garganta e perda de paladar ou olfato. Em casos mais graves, pode levar a complicações respiratórias e até mesmo à morte.",
        type: "text",
        size: 1,
        PostsId: 1,
        order: 1,
      },
      {
        content:
          "Para conter a propagação do vírus, medidas preventivas foram adotadas em todo o mundo. Isso inclui o uso de máscaras faciais, lavagem frequente das mãos com água e sabão ou uso de desinfetante para as mãos à base de álcool, distanciamento social, evitar aglomerações e o fechamento temporário de empresas e escolas em várias regiões.",
        type: "text",
        size: 1,
        PostsId: 1,
        order: 2,
      },
      {
        content:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dKrMm0yphqcm4ReGmaPMzryomIzy_cAt-x50yCAmsSG6rdiEHhfZ07l3EcQUmBUpC_I&usqp=CAU",
        type: "image",
        size: undefined,
        PostsId: 1,
        order: 3,
      },
      {
        content:
          "Além das medidas preventivas, os testes para detectar casos de infecção pelo vírus foram amplamente implementados, permitindo uma identificação rápida de indivíduos infectados. Isso ajuda a isolar os casos positivos e a rastrear seus contatos próximos para evitar uma maior propagação do vírus.",
        type: "text",
        size: 1,
        PostsId: 1,
        order: 3,
      },
      {
        content:
          "No entanto, apesar dos esforços globais, o COVID-19 continua sendo um desafio significativo. Novas variantes do vírus surgiram, algumas das quais parecem ser mais transmissíveis ou podem escapar parcialmente da resposta imunológica fornecida pelas vacinas. Isso destaca a importância contínua das medidas preventivas e da pesquisa em andamento para desenvolver novas vacinas e tratamentos eficazes.",
        type: "text",
        size: 1,
        PostsId: 1,
        order: 4,
      }, // a //
      {
        content:
          "Os dinossauros foram um grupo diversificado de répteis que dominaram a Terra durante a era Mesozoica, há milhões de anos atrás. Eles são conhecidos por sua variedade impressionante em tamanho, forma e comportamento, e fascinam cientistas e entusiastas de todo o mundo.",
        type: "text",
        size: 1,
        PostsId: 2,
        order: 4,
      },
      {
        content:
          "Os dinossauros surgiram há cerca de 230 milhões de anos, durante o período Triássico, e evoluíram ao longo de milhões de anos em uma ampla gama de formas e tamanhos. Eles foram os animais terrestres dominantes por mais de 160 milhões de anos, até sua extinção repentina no final do período Cretáceo, há aproximadamente 65,5 milhões de anos.",
        type: "text",
        size: 1,
        PostsId: 2,
        order: 4,
      },
      {
        content:
          "https://s2.glbimg.com/Z8rOMhj50H_DEIJVpgal7_JtKvA=/e.glbimg.com/og/ed/f/original/2021/06/29/dinosaurs-were-in-decl-1.jpg",
        type: "image",
        size: undefined,
        PostsId: 2,
        order: 4,
      },
      {
        content:
          "Essas criaturas antigas eram incrivelmente diversas. Alguns eram enormes, como o gigantesco argentinosaurus, que podia atingir comprimentos de até 30 metros, e o famoso tyrannosaurus rex, com seus dentes afiados e membros anteriores reduzidos. Outros eram menores e mais ágeis, como o velociraptor, conhecido por sua cauda longa e garras em forma de foice.",
        type: "text",
        size: 1,
        PostsId: 2,
        order: 4,
      },
      {
        content:
          "Os dinossauros também se diferenciavam em sua dieta. Alguns eram carnívoros, alimentando-se de outros animais, enquanto outros eram herbívoros, subsistindo de plantas e folhagens. Havia também os omnívoros, que se alimentavam de uma variedade de fontes.",
        type: "text",
        size: 1,
        PostsId: 2,
        order: 4,
      }, // b
      {
        content:
          "A história do Brasil é fascinante e repleta de acontecimentos que moldaram a nação ao longo dos séculos. Desde os povos indígenas que habitavam o território antes da chegada dos europeus, passando pelo período colonial, o império, a República e os desafios enfrentados até os dias de hoje, o Brasil traz consigo uma rica e complexa narrativa histórica.",
        type: "text",
        size: 1,
        PostsId: 3,
        order: 4,
      },
      {
        content:
          "Antes da chegada dos portugueses em 1500, várias civilizações indígenas habitavam o território brasileiro, como os tupis, guaranis, jês e muitos outros. A colonização portuguesa teve início com a chegada de Pedro Álvares Cabral, que reivindicou a terra em nome de Portugal. Durante os primeiros anos, o Brasil era utilizado principalmente como fonte de pau-brasil, uma árvore valiosa utilizada para tingir tecidos.",
        type: "text",
        size: 1,
        PostsId: 3,
        order: 4,
      },
      {
        content:
          "https://static.todamateria.com.br/upload/ma/pa/mapadobrasilporestados1-cke.jpg?auto_optimize=low",
        type: "image",
        size: undefined,
        PostsId: 3,
        order: 4,
      },
      {
        content:
          "No século XVI, a exploração de outros recursos naturais, como a cana-de-açúcar, se tornou predominante. Grandes plantações foram estabelecidas, e milhares de africanos foram trazidos como escravos para trabalhar nas lavouras. Essa exploração colonial moldou profundamente a sociedade brasileira e criou uma estrutura de desigualdade que perdurou por séculos.",
        type: "text",
        size: 1,
        PostsId: 3,
        order: 4,
      },
      {
        content:
          "Em 1808, a família real portuguesa fugiu das invasões napoleônicas e se instalou no Brasil. Esse evento, conhecido como a vinda da família real, trouxe uma série de transformações para o país, como a abertura dos portos às nações amigas, o estabelecimento de instituições culturais e a modernização da cidade do Rio de Janeiro.",
        type: "text",
        size: 1,
        PostsId: 3,
        order: 4,
      }, // c
      {
        content:
          "As inteligências artificiais (IAs) são sistemas computacionais desenvolvidos para simular certos aspectos da inteligência humana. Essas entidades digitais têm a capacidade de aprender, processar informações, tomar decisões e realizar tarefas de maneira autônoma. Elas desempenham um papel cada vez mais importante em diversos campos, como ciência, medicina, indústria, transporte e muitos outros.",
        type: "text",
        size: 1,
        PostsId: 4,
        order: 4,
      },
      {
        content:
          "https://img.olhardigital.com.br/wp-content/uploads/2023/05/IA-Microsoft.jpg",
        type: "image",
        size: undefined,
        PostsId: 4,
        order: 4,
      },
      {
        content:
          "Um dos ramos mais promissores das IAs é o Aprendizado Profundo (Deep Learning). Esse campo envolve redes neurais artificiais profundas, que são capazes de aprender camada por camada, extraindo características complexas dos dados de entrada. Essas redes neurais profundas têm sido aplicadas com sucesso em tarefas como reconhecimento de voz, visão computacional, processamento de linguagem natural e muito mais.",
        type: "text",
        size: 1,
        PostsId: 4,
        order: 4,
      },
      {
        content:
          "No entanto, as IAs também enfrentam desafios significativos. Um deles é o viés algorítmico, que pode ocorrer quando os dados usados para treinar as IAs são enviesados ou representam de forma inadequada certos grupos ou aspectos da sociedade. Isso pode levar a resultados injustos ou discriminatórios. Além disso, a questão da responsabilidade também surge quando IAs autônomas tomam decisões importantes, como carros autônomos decidindo sobre a vida de motoristas e pedestres em situações de emergência.",
        type: "text",
        size: 1,
        PostsId: 4,
        order: 4,
      },
      {
        content:
          "Outra preocupação relacionada às IAs é a questão ética. À medida que as IAs se tornam mais autônomas e capazes de realizar tarefas complexas, surgem perguntas sobre seu impacto no mercado de trabalho, na privacidade dos dados e na segurança cibernética. Essas preocupações levaram ao debate sobre regulamentação e governança das IAs, a fim de garantir seu uso ético e responsável.",
        type: "text",
        size: 1,
        PostsId: 4,
        order: 4,
      }, //d
    ];

    await prismaClient.postContent.createMany({
      data: postsContent,
    });

    console.log("Postagens criadas");
  } catch (err: any) {
    console.log(err);
    console.log("Erro ao criar as postagens");
  }
}

async function createSeeds() {
  await seedAdm();
  await seedPostTags();
  await seedPosts();
  await seedPostsContent();
}

createSeeds();
