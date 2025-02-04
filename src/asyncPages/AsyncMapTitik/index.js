import Loadable from "react-loadable";
import Loading from "../../components/Loading";

const AsyncMapTitik = Loadable({
  loader: () => import("../../pages/ModuleMap/MapTitik" /* webpackChunkName: "MapTitik" */),
  loading: Loading
});

export default AsyncMapTitik;