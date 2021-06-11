import { reactive } from "@vue/reactivity";
import axios, { AxiosResponse } from "axios";

interface NpmPackageResponse {
  _id: string;
  name: string;
  description: string;
  bugs: { url: string };
  homepage: string;
  repository: { type: string; url: string };
}

interface Package {
  name: string;
  description: string;
  bugUrl: string;
  homepage: string;
  repo: string;
}

interface State {
  packages: Package[];
}

export interface PackagesState {
  state: State;
  init: (packageNames: string[]) => void;
}

export function usePackages(): PackagesState {
  const state: State = reactive({
    packages: [],
  });

  function getPackage(name: string): Promise<NpmPackageResponse> {
    return axios.get(`/npm/${name}`).then((resp: AxiosResponse) => resp.data);
  }

  function init(packageNames: string[]): void {
    packageNames.forEach(async (name: string) => {
      await getPackage(name).then((rawPackage: NpmPackageResponse) => {
        console.log(rawPackage);
        const { name, description, homepage } = rawPackage;
        state.packages.push({
          name,
          description,
          homepage,
          bugUrl: rawPackage.bugs.url,
          repo: rawPackage.repository.url,
        });
      });
    });
  }

  return { state, init };
}
