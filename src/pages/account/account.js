import { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { BasicLayout } from '@/layouts';
import { useAuth } from '@/hooks';
import { Separator } from '@/components/Shared';
import { Info, Settings, Address, Wishlist } from '@/components/Account';
import styles from './account.module.scss';

const accountPage = () => {
  const { user, logout} = useAuth();
  const router = useRouter();
  const [reload, setReload] = useState(false);

  if (!user) {
    router.push("/");
    return null;
  }

  const onReload = () => setReload((prevState) => !prevState);

  const panes = [
    {
      menuItem: "Mis pedidos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis pedidos...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Listas de deseos",
      render: () => (
        <Tab.Pane attached={false}>
          <Wishlist/>
          <Separator height={80}/>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <Address.AddAddress onReload={onReload}/>
          <Address.ListAddresses reload={reload} onReload={onReload}/>
          <Separator height={80}/>
        </Tab.Pane>
      ),
    },
    {
      menuItem: { key:20, icon: "settings", content: "Ajustes"},
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm/>
          <div className={styles.containerForms}>
            <Settings.ChangeEmailForm/>
            <Settings.ChangePasswordForm/>
          </div>
          <Separator height={80}/>
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key:21,
        icon: "log out",
        content: "",
        onClick: logout,
      },
    },
  ];
  return (
    <>
      <BasicLayout isContainer relative>
        <Info/>

        <Tab 
          menu={{ secondary: true, pointing: true }} 
          panes={panes}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  )
}

export default accountPage
