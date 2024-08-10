import UIKit

class GradientView: UIView {
    override class var layerClass: AnyClass {
        return CAGradientLayer.self
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        setupGradientLayer()
    }

    override init(frame: CGRect) {
        super.init(frame: frame)
        setupGradientLayer()
    }

    private func setupGradientLayer() {
        if let gradientLayer = self.layer as? CAGradientLayer {
            gradientLayer.colors = [
                UIColor(red: 0.13, green: 0.87, blue: 1.00, alpha: 1.00).cgColor,
                UIColor(red: 0.42, green: 0.32, blue: 1.00, alpha: 1.00).cgColor,
                UIColor(red: 0.61, green: 0.01, blue: 1.00, alpha: 1.00).cgColor
            ]
            gradientLayer.startPoint = CGPoint(x: 0.0, y: 0.0)
            gradientLayer.endPoint = CGPoint(x: 1.0, y: 1.0)
        }
    }
}
