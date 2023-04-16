import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd } from "@/components/Shared";

const platformsId = {
  playstation: 1,
  xbox: 4,
  nintendo: 5,
  pc: 3,
};

const HomePage = () => {
  return (
    <>
      <BasicLayout>
        <Home.BannerLastGamePublished />

        <Separator heigth={100} />

        <Container>
          <Home.LatestGames title="Ultimos lanzamientos" />
        </Container>

        <Separator heigth={100} />

        <BarTrust />

        <Separator heigth={100} />

        <Container>
          <Home.LatestGames
            title="PlayStation"
            limit={3}
            platformId={platformsId.playstation}
          />
        </Container>

        <Separator heigth={100} />

        <BannerAd
          title="Registrate y obten los mejores precios"
          subtitle="¡Compara con otros juegos y elige el tuyo!"
          btnTitle="Entrar ahora"
          btnLink="/account"
          image="images/img01.png"
        />

        <Separator heigth={50} />

        <Container>
          <Home.LatestGames
            title="Xbox"
            limit={3}
            platformId={platformsId.xbox}
          />
        </Container>

        <Separator heigth={100} />
      </BasicLayout>
    </>
  );
};

export default HomePage;
