import Head from "next/head";

export function Seo(props) {
  const {
    title = "WowGames - Tus juegos favoritos",
    description = "Tus juegos favoritos para Steam, PlayStation, Xbox, Switch al mejor precio.",
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta name="author" content="Victor Toledo"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
  );
}