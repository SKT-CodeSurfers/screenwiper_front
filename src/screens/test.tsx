import React, { useState, useEffect, useCallback } from "react";
import { AppRegistry, Text, View, Image, Button, StyleSheet } from "react-native";
import ShareMenu, { ShareMenuReactView } from "react-native-share-menu";

type SharedItem = {
  mimeType: string;
  data: string;
  extraData: any;
};

const Test = () => {
  const [sharedData, setSharedData] = useState<string | null>(null);
  const [sharedMimeType, setSharedMimeType] = useState<string | null>(null);

  const handleShare = useCallback((item: SharedItem | null) => {
    if (!item) {
      return;
    }

    const { mimeType, data, extraData } = item;

    setSharedData(data);
    setSharedMimeType(mimeType);
    console.log(extraData);
  }, []);

  useEffect(() => {
    ShareMenu.getInitialShare(handleShare);
  }, [handleShare]);

  useEffect(() => {
    const listener = ShareMenu.addNewShareListener(handleShare);

    return () => {
      listener.remove();
    };
  }, [handleShare]);

  if (!sharedMimeType && !sharedData) {
    return (
      <View style={styles.container}>
        <Text>No data shared yet.</Text>
      </View>
    );
  }

  if (sharedMimeType === "text/plain") {
    return (
      <View style={styles.container}>
        <Text>Shared text: {sharedData}</Text>
      </View>
    );
  }

  if (sharedMimeType?.startsWith("image/")) {
    return (
      <View style={styles.container}>
        <Text>Shared image:</Text>
        <Image source={{ uri: sharedData! }} style={styles.image} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Shared mime type: {sharedMimeType}</Text>
      <Text>Shared file location: {sharedData}</Text>
    </View>
  );
};

const Share = () => {
  const [sharedData, setSharedData] = useState<string>("");
  const [sharedMimeType, setSharedMimeType] = useState<string>("");

  useEffect(() => {
    ShareMenuReactView.data().then(({ mimeType, data }) => {
      setSharedData(data);
      setSharedMimeType(mimeType);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Dismiss"
        onPress={() => {
          ShareMenuReactView.dismissExtension();
        }}
      />
      <Button
        title="Send"
        onPress={() => {
          ShareMenuReactView.dismissExtension();
        }}
      />
      <Button
        title="Dismiss with Error"
        onPress={() => {
          ShareMenuReactView.dismissExtension("Something went wrong!");
        }}
      />
      <Button
        title="Continue In App"
        onPress={() => {
          ShareMenuReactView.continueInApp();
        }}
      />
      <Button
        title="Continue In App With Extra Data"
        onPress={() => {
          ShareMenuReactView.continueInApp({ hello: "from the other side" });
        }}
      />
      {sharedMimeType === "text/plain" && <Text>{sharedData}</Text>}
      {sharedMimeType.startsWith("image/") && (
        <Image source={{ uri: sharedData }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

AppRegistry.registerComponent("Test", () => Test);
AppRegistry.registerComponent("ShareMenuModuleComponent", () => Share);

export default Test;
