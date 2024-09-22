#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import "RNSplashScreen.h"
#import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  
  self.moduleName = @"ScreenWiper";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  [GMSServices provideAPIKey:@"AIzaSyCy21toZorbN4Z_I9p3o2_G5byhG9I-Kk4"];

  bool didFinish = [super application:application didFinishLaunchingWithOptions:launchOptions];

  
  // 스크린샷 감지 노티피케이션 등록
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(userDidTakeScreenshot:)
                                               name:UIApplicationUserDidTakeScreenshotNotification
                                             object:nil];
  
  [RNSplashScreen show];
  
  return didFinish;
}

// 스크린샷 감지 메소드
- (void)userDidTakeScreenshot:(NSNotification *)notification
{
    NSLog(@"스크린샷이 감지되었습니다!");
    // 스크린샷 발생 시 필요한 추가 작업을 여기서 처리
}


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
