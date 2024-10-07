import React, { useState, useEffect, useCallback } from "react";
import { AppRegistry, Text, View, Image, Button, StyleSheet } from "react-native";
import ShareMenu, { ShareMenuReactView } from "react-native-share-menu";

// 공유 데이터의 타입 정의
type SharedItem = {
  mimeType: string;
  data: string;
  extraData: any;
};

const Test = () => {
  const [sharedData, setSharedData] = useState<string | null>(null);
  const [sharedMimeType, setSharedMimeType] = useState<string | null>(null);

  // 공유 데이터를 처리하는 콜백 함수
  const handleShare = useCallback((item: SharedItem | null) => {
    if (!item) {
      return;
    }

    const { mimeType, data, extraData } = item;

    setSharedData(data);
    setSharedMimeType(mimeType);
    // 추가 데이터 로그
    console.log(extraData);
  }, []);

  // 앱이 처음 시작되었을 때 공유 데이터 처리
  useEffect(() => {
    ShareMenu.getInitialShare(handleShare);
  }, [handleShare]);

  // 앱이 실행 중일 때 새로운 공유 데이터를 처리
  useEffect(() => {
    const listener = ShareMenu.addNewShareListener(handleShare);

    return () => {
      listener.remove();
    };
  }, [handleShare]);

  if (!sharedMimeType && !sharedData) {
    // 사용자가 아직 공유한 것이 없을 때
    return (
      <View style={styles.container}>
        <Text>No data shared yet.</Text>
      </View>
    );
  }

  if (sharedMimeType === "text/plain") {
    // 텍스트가 공유된 경우
    return (
      <View style={styles.container}>
        <Text>Shared text: {sharedData}</Text>
      </View>
    );
  }

  if (sharedMimeType?.startsWith("image/")) {
    // 이미지가 공유된 경우
    return (
      <View style={styles.container}>
        <Text>Shared image:</Text>
        <Image source={{ uri: sharedData! }} style={styles.image} />
      </View>
    );
  }

  // 일반 파일이 공유된 경우
  return (
    <View style={styles.container}>
      <Text>Shared mime type: {sharedMimeType}</Text>
      <Text>Shared file location: {sharedData}</Text>
    </View>
  );
};

// 공유 메뉴를 위한 컴포넌트
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

// 스타일 정의
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

// 컴포넌트 등록
AppRegistry.registerComponent("Test", () => Test);
AppRegistry.registerComponent("ShareMenuModuleComponent", () => Share);

export default Test;
