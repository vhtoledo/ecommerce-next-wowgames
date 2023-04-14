import { Tab } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { BasicLayout } from '@/layouts'
import { useAuth } from '@/hooks'
import { Info } from '@/components/Account'
import styles from './account.module.scss'

const accountPage = () => {
  const { user, logout} = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/");
    return null;
  }

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
          <p>Mi lista de deseos...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis direcciones...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: { icon: "settings", content: "Ajustes"},
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis ajustes...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        icon: "logout",
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
