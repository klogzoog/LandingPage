// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oQxpKrjZ7ipxCRCmWKxYNo
// Component: VHTtjgKnGNjrQZ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import BaseCard from "../../BaseCard"; // plasmic-import: ydQM360SoG6WA_/component
import Bullet from "../../Bullet"; // plasmic-import: VY2zRNWA3ZRWzF/component
import LinkButton from "../../LinkButton"; // plasmic-import: oKO1--jgELabR/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as sty from "./PlasmicPlan.module.css"; // plasmic-import: VHTtjgKnGNjrQZ/css

export const PlasmicPlan__VariantProps = new Array();

export const PlasmicPlan__ArgProps = new Array(
  "price",
  "name",
  "description",
  "children"
);

function PlasmicPlan__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <BaseCard
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box___0TaVp)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__tp67Z)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Basic",
            value: args.name,
            className: classNames(sty.slotName)
          })}

          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__dJX6
                )}
              >
                {"$10"}
              </div>
            ),

            value: args.price
          })}

          {p.renderPlasmicSlot({
            defaultContents: (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box___5Sp0H)}
              >
                <Bullet
                  className={classNames("__wab_instance", sty.bullet___3Jt9H)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__q7T8T)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__pVtAa)}
                />
              </p.Stack>
            ),

            value: args.description
          })}

          <div className={classNames(defaultcss.all, sty.box__xrGC)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <LinkButton text={"Get started"} type={"outlineBlue"} />
              ),

              value: args.children
            })}
          </div>
        </p.Stack>
      </div>
    </BaseCard>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPlan__ArgProps,
      internalVariantPropNames: PlasmicPlan__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPlan__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlan";
  } else {
    func.displayName = `PlasmicPlan.${nodeName}`;
  }
  return func;
}

export const PlasmicPlan = Object.assign(
  // Top-level PlasmicPlan renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPlan
    internalVariantProps: PlasmicPlan__VariantProps,
    internalArgProps: PlasmicPlan__ArgProps
  }
);

export default PlasmicPlan;
/* prettier-ignore-end */
