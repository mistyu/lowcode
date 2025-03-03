import { Input } from 'ant-design-vue'
import { type App } from 'vue'

export function installAntdv(app: App) {
  app.use(Input)
}
