import { onMount } from "solid-js"
import { main_web } from "~/wasm/pkg/convexhull_web"

onMount(async () => {
  await main_web()
})

export default function ConvexHull() {
  return <></>
}
