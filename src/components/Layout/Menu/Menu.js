import { useEffect, useState } from "react";
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
    <div>Menu</div>
  )
}
