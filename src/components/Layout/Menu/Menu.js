import { useEffect, useState } from "react";
import Link from "next/link";
import { Image } from "semantic-ui-react";
import { map } from "lodash";
import { Platform } from "@/api";
import styles from "./Menu.module.scss";

const platformsCtrl = new Platform();

export const Menu = (props) => {
    const { isOpenSearch } = props;
    const [platforms, setPlatforms] = useState(null);

    useEffect(() => {
      (async () => {
        try {
            const response = await platformsCtrl.getAll();
            setPlatforms(response.data);
        } catch (error) {
            console.error(error);
        }
      })();
    }, []);
    

  return (
    <div className={styles.platforms}>
        {map(platforms, (platform) => (
            <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
                <Image src={platform.attributes.icon.data.attributes.url} />
                {platform.attributes.title}
            </Link>
        ))}
    </div>
  )
}
