function useNavigation<T>(
  { left, right }: { left: T | null; right: T | null },
  options: {
    href: (obj: T) => string;
    primaryText: (obj: T) => string;
    secondaryText?: (obj: T) => string | undefined;
  },
): {
  left: {
    href: string;
    primaryText: string;
    secondaryText?: string | undefined;
  } | null;
  right: {
    href: string;
    primaryText: string;
    secondaryText?: string | undefined;
  } | null;
} {
  return {
    left: left
      ? {
          href: options.href(left),
          primaryText: options.primaryText(left),
          secondaryText: options.secondaryText?.(left),
        }
      : null,
    right: right
      ? {
          href: options.href(right),
          primaryText: options.primaryText(right),
          secondaryText: options.secondaryText?.(right),
        }
      : null,
  };
}

export default useNavigation;
