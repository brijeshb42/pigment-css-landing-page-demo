import * as React from "react";
import { styled } from "@/lib/styled";

const AvatarRoot = styled("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[ownerState.variant],
      ownerState.colorDefault && styles.colorDefault,
    ];
  },
})(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none",
  variants: [
    {
      props: { variant: "rounded" },
      style: {
        borderRadius: (theme.vars || theme).shape.borderRadius,
      },
    },
    {
      props: { variant: "square" },
      style: {
        borderRadius: 0,
      },
    },
    {
      props: { colorDefault: true },
      style: {
        color: (theme.vars || theme).palette.background.default,
        backgroundColor: (theme.vars ?? theme).palette.grey[400],
        ...theme.applyStyles("dark", {
          backgroundColor: (theme.vars ?? theme).palette.grey[600],
        }),
      },
    },
  ],
}));

const AvatarImg = styled("img", {
  name: "MuiAvatar",
  slot: "Img",
  overridesResolver: (props, styles) => styles.img,
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 10000,
});

const AvatarFallback = styled("svg", {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (props, styles) => styles.fallback,
})({
  width: "75%",
  height: "75%",
});

function useLoaded({ crossOrigin, referrerPolicy, src, srcSet }) {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded(false);

    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded("loaded");
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded("error");
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }

    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);

  return loaded;
}

export const Avatar = React.forwardRef(function Avatar(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "MuiAvatar" });
  const {
    alt,
    children: childrenProp,
    className,
    component = "div",
    slots = {},
    slotProps = {},
    imgProps,
    sizes,
    src,
    srcSet,
    variant = "circular",
    ...other
  } = props;

  let children = null;

  // Use a hook instead of onError on the img element to support server-side rendering.
  const loaded = useLoaded({ ...imgProps, src, srcSet });
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== "error";

  const ownerState = {
    ...props,
    colorDefault: !hasImgNotFailing,
    component,
    variant,
  };

  const classes = useUtilityClasses(ownerState);

  const [ImgSlot, imgSlotProps] = useSlot("img", {
    className: classes.img,
    elementType: AvatarImg,
    externalForwardedProps: {
      slots,
      slotProps: { img: { ...imgProps, ...slotProps.img } },
    },
    additionalProps: { alt, src, srcSet, sizes },
    ownerState,
  });

  if (hasImgNotFailing) {
    children = <ImgSlot {...imgSlotProps} />;
    // We only render valid children, non valid children are rendered with a fallback
    // We consider that invalid children are all falsy values, except 0, which is valid.
  } else if (!!childrenProp || childrenProp === 0) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = (
      <AvatarFallback ownerState={ownerState} className={classes.fallback} />
    );
  }

  return (
    <AvatarRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </AvatarRoot>
  );
});
