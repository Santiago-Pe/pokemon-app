// src/components/loader/lodable/lodable.interfaces.tsx
import { ComponentType, LazyExoticComponent } from "react";
export default interface LoadableProps {
  component: LazyExoticComponent<ComponentType<unknown>>;
}