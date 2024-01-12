import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <>
            <li key={cat.title}>
              <span className={styles.category}>
                {cat.title}

                {cat.list.map((item) => (
                  <>
                    <MenuLink item={item} />
                  </>
                ))}
              </span>
            </li>
          </>
        ))}
      </ul>
      <form>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
